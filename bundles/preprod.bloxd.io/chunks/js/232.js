export const id = 232;
export const ids = [232];
export const modules = {
  39911: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => wQ,
      h: () => qQ
    });
    const wQ = "The world isn't loaded, so no blocks can be seen.",
      qQ = "The world isn't loaded, so nothing in it can be seen."
  },
  39373: (QQ, WQ, XQ) => {
    function wQ(QQ) {
      return !(!QQ.lobbyLeaderboardInfo && !QQ.lobbyManage)
    }
    XQ.d(WQ, {
      b: () => wQ
    })
  },
  37112: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => TQ,
      f: () => qQ
    });
    let wQ = () => null;

    function qQ(QQ) {
      wQ = QQ
    }

    function TQ(QQ, WQ) {
      return wQ(QQ, WQ)
    }
  },
  40837: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => BQ,
      d: () => pQ,
      f: () => DQ,
      j: () => yQ
    });
    var wQ = XQ(31),
      qQ = XQ(40839),
      TQ = XQ(40829),
      zQ = XQ(40845),
      sQ = XQ(40835),
      FQ = XQ(40847),
      PQ = XQ(40857);

    function gQ(QQ) {
      var WQ, XQ;
      const wQ = (0, TQ.j)();
      return wQ ? null === (WQ = (0, qQ.b)(wQ.api, QQ[0], QQ[1], QQ[2])) || void 0 === WQ || null === (XQ = WQ.persisted) || void 0 === XQ ? void 0 : XQ.shared : void 0
    }

    function JQ(QQ) {
      return `${QQ[0]},${QQ[1]},${QQ[2]}`
    }
    const rQ = new Map;
    let IQ = null,
      jQ = 0;

    function BQ() {
      return jQ
    }

    function yQ(QQ) {
      const WQ = null !== IQ && IQ.key === JQ(QQ.pos) ? IQ.type : null;
      if (null === WQ) return QQ;
      let XQ = null;
      if ("Iron" === WQ) {
        const {
          cachedPasskey: WQ,
          ...wQ
        } = VQ(QQ.pos);
        XQ = {
          ys: null !== WQ && void 0 !== WQ ? WQ : [0, 0, 0, 0],
          ...wQ
        }
      }
      return {
        ...QQ,
        type: WQ,
        ironChest: XQ
      }
    }

    function VQ(QQ) {
      const WQ = gQ(QQ),
        XQ = null === WQ || void 0 === WQ ? void 0 : WQ.ownerDbId,
        wQ = function(QQ) {
          var WQ;
          let XQ = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : gQ(QQ);
          const wQ = JQ(QQ),
            qQ = rQ.get(wQ);
          return qQ ? qQ.lastOpened < (null !== (WQ = null === XQ || void 0 === XQ ? void 0 : XQ.passkeyLastUpdated) && void 0 !== WQ ? WQ : 0) ? (rQ.delete(wQ), null) : [...qQ.ys] : null
        }(QQ, WQ);
      return void 0 === XQ ? {
        cachedPasskey: wQ
      } : {
        ownerDbId: XQ,
        cachedPasskey: wQ
      }
    }(0, PQ.j)(zQ.b, (QQ => {
      const WQ = (0, FQ.d)(zQ.b, QQ);
      if (!(0, FQ.c)(WQ) || WQ.oq) return;
      if (jQ++, !WQ.Lq || null === WQ.Sq) return void(IQ = null);
      const XQ = JQ(WQ.Sq);
      IQ = {
        key: XQ,
        type: WQ.fq
      }, null !== WQ.tq && rQ.set(XQ, {
        ys: [...WQ.tq],
        lastOpened: Date.now()
      })
    })), (0, PQ.g)((() => {
      rQ.clear(), IQ = null, jQ++
    })), (0, PQ.h)((() => {
      null !== IQ && (IQ = null, jQ++, wQ.k.mB("chestToggleFromServer", !1, !0))
    }));
    const DQ = {
        boardEditRequested: {
          watch: QQ => (0, wQ.o)("EditBoard", (WQ => {
            let {
              pos: XQ
            } = WQ;
            if (null === XQ) return void QQ(null);
            const wQ = (0, TQ.j)(),
              qQ = (0, TQ.u)();
            wQ && qQ && QQ(qQ.readBoardToEdit(wQ.api, wQ.chunks, XQ))
          }))
        },
        ironChestOpenRequested: {
          watch: QQ => (0, wQ.o)("OpenIronChest", (WQ => {
            let {
              pos: XQ
            } = WQ;
            QQ(function(QQ) {
              return {
                pos: QQ,
                ...VQ(QQ)
              }
            }(XQ))
          }))
        }
      },
      pQ = {
        writeOnBoard(QQ) {
          var WQ;
          let {
            pos: XQ,
            text: wQ,
            textSize: qQ
          } = QQ;
          null === (WQ = (0, TQ.j)()) || void 0 === WQ || WQ.send(sQ.d.UpdateBoard, (0, sQ.U)({
            UF: XQ,
            bF: wQ,
            vF: qQ
          }))
        },
        writeBook(QQ) {
          var WQ;
          let {
            pages: XQ,
            title: wQ,
            published: qQ
          } = QQ;
          null === (WQ = (0, TQ.j)()) || void 0 === WQ || WQ.send(sQ.d.UpdateBook, (0, sQ.X)({
            kz: XQ,
            fz: wQ,
            Sz: qQ
          }))
        },
        writeNameTag(QQ) {
          var WQ;
          null === (WQ = (0, TQ.j)()) || void 0 === WQ || WQ.send(sQ.d.UpdateNameTag, QQ)
        },
        setCustomLobbyBlock(QQ) {
          let {
            pos: WQ,
            blockName: XQ
          } = QQ;
          const wQ = (0, TQ.u)(),
            qQ = (0, TQ.j)();
          wQ && qQ && qQ.send(sQ.d.SetCustomLobbyBlock, (0, sQ.G)({
            ez: wQ.blockIdOf(XQ),
            tz: WQ
          }))
        }
      }
  },
  40876: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      c: () => FQ,
      d: () => zQ,
      e: () => sQ
    });
    var wQ = XQ(40813),
      qQ = XQ(5118),
      TQ = XQ(40829);

    function zQ() {
      var QQ;
      const WQ = null === (QQ = (0, TQ.j)()) || void 0 === QQ ? void 0 : QQ.api.localId;
      return void 0 === WQ || WQ === wQ.xd ? null : String(WQ)
    }

    function sQ(QQ) {
      const WQ = (0, TQ.j)();
      if (null !== WQ) return QQ(WQ);
      let XQ = null;
      const wQ = (0, qQ.t)((() => {
        const WQ = (0, TQ.j)();
        null !== WQ && null === XQ && (wQ(), XQ = QQ(WQ))
      }));
      return () => {
        var QQ;
        wQ(), null === (QQ = XQ) || void 0 === QQ || QQ()
      }
    }

    function FQ(QQ, WQ, XQ) {
      return {
        current: () => {
          const XQ = (0, TQ.j)();
          return null === XQ ? WQ : QQ(XQ)()
        },
        watch: WQ => sQ((wQ => {
          const qQ = QQ(wQ);
          let TQ = qQ();
          return WQ(TQ), XQ((() => {
            const QQ = qQ();
            QQ !== TQ && (TQ = QQ, WQ(QQ))
          }))
        }))
      }
    }
  },
  40871: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => PQ
    });
    var wQ = XQ(40829),
      qQ = XQ(40876),
      TQ = XQ(40883);

    function zQ() {
      var QQ, WQ;
      return null !== (QQ = null === (WQ = (0, wQ.j)()) || void 0 === WQ ? void 0 : WQ.itemBridgeSources) && void 0 !== QQ ? QQ : TQ.b
    }

    function sQ(QQ) {
      return {
        current: () => zQ().states[QQ].current(),
        watch: WQ => (0, qQ.e)((XQ => {
          const wQ = XQ.itemBridgeSources.states[QQ];
          return WQ(wQ.current()), wQ.watch(WQ)
        }))
      }
    }

    function FQ(QQ) {
      return {
        watch: WQ => (0, qQ.e)((XQ => XQ.itemBridgeSources.events[QQ].watch(WQ)))
      }
    }
    const PQ = {
      states: {
        inventory: sQ("inventory"),
        hotbar: sQ("hotbar"),
        crafting: sQ("crafting"),
        heldItemAim: sQ("heldItemAim")
      },
      events: {
        hotbarSlotRequested: FQ("hotbarSlotRequested"),
        hotbarScrolled: FQ("hotbarScrolled"),
        numberKeyPressed: FQ("numberKeyPressed"),
        inventoryDropRequested: FQ("inventoryDropRequested"),
        chestToggled: FQ("chestToggled"),
        chestRefreshed: FQ("chestRefreshed"),
        inventorySynced: FQ("inventorySynced"),
        enchantingTableOpened: FQ("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: QQ => zQ().commands.selectHotbarSlot(QQ),
        removeInventoryItem: QQ => zQ().commands.removeInventoryItem(QQ),
        swapInventorySlots: QQ => zQ().commands.swapInventorySlots(QQ),
        moveInventoryItem: QQ => zQ().commands.moveInventoryItem(QQ),
        quickMoveInventoryItem: QQ => zQ().commands.quickMoveInventoryItem(QQ),
        closeChest: QQ => zQ().commands.closeChest(QQ),
        focusCrafting: QQ => zQ().commands.focusCrafting(QQ),
        craftRecipe: QQ => zQ().commands.craftRecipe(QQ),
        salvageItem: QQ => zQ().commands.salvageItem(QQ),
        enchantItem: QQ => zQ().commands.enchantItem(QQ)
      },
      queries: {
        enchantingOffer: QQ => zQ().queries.enchantingOffer(QQ)
      }
    }
  },
  40883: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => sQ
    });
    var wQ = XQ(39911);

    function qQ(QQ) {
      return {
        current: () => QQ,
        watch: () => () => {}
      }
    }

    function TQ() {}
    const zQ = Object.freeze([0, 0, 0]),
      sQ = {
        states: {
          health: qQ({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: qQ({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: qQ({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: qQ({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: qQ({}),
          creativeVisibility: qQ({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: qQ(null),
          heldItemAim: qQ({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: qQ(!1),
          gliderBoostFuel: qQ(0),
          flight: qQ({
            canFly: !1,
            flying: !1
          }),
          crafting: qQ({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: qQ({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: qQ({}),
          fullInventory: qQ(!1),
          crosshairTarget: qQ({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: qQ(!0),
          freeCamera: qQ({
            allowed: !1,
            movesFly: !1
          }),
          replay: qQ(null),
          replayEdits: qQ(null),
          replayRecorder: qQ({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: qQ(!1)
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
          selectHotbarSlot: TQ,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: TQ,
          setInventoryOpen: TQ,
          changeIronChestPasskey: TQ,
          dragReplayCamera: TQ,
          applyTemporaryThirdPerson: TQ,
          holdEmoteWheel: TQ,
          recordFlyingMiddleText: TQ,
          focusCrafting: TQ,
          craftRecipe: () => ({
            bg: 0,
            QF: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: TQ,
          setShopOpen: TQ,
          buyShopItem: TQ,
          lobbyManage: TQ,
          sendChatMessage: TQ,
          ignorePlayer: TQ,
          reportPlayer: TQ,
          reportWorldCodeChat: TQ,
          requestDiscordReportKey: TQ,
          reportLobbyOrGame: TQ,
          playEmote: TQ,
          updateMyCosmetic: TQ,
          writeOnBoard: TQ,
          writeBook: TQ,
          writeNameTag: TQ,
          setCustomLobbyBlock: TQ,
          openIronChest: TQ,
          sendCodeCollab: TQ,
          clickCodeBlock: TQ,
          bindCustomButtonKeys: TQ,
          pressCustomButton: TQ,
          moveReplayFreecam: TQ,
          holdReplayFreecamVertical: TQ,
          respawn: TQ,
          wakeUp: TQ,
          requestLeaderboard: TQ,
          completeTask: TQ,
          setServerCookie: TQ,
          answerUiRequest: TQ,
          chooseRewardedAd: TQ,
          setCameraZoom: TQ,
          setFreeCameraMovesFly: TQ,
          setBlockHighlight: TQ,
          setCrosshairInteractPrompt: TQ,
          setLookSensitivity: TQ,
          replayAction: TQ,
          setReplayPlaying: TQ,
          seekReplay: TQ,
          setReplayCameraMode: TQ,
          syncReplayCameraMode: TQ,
          setReplayCameraKeyframe: TQ,
          moveReplayCameraKeyframe: TQ,
          deleteReplayCameraKeyframes: TQ,
          setReplayPlaybackMark: TQ,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: TQ,
          exportReplayVideo: TQ,
          toggleRecording: TQ,
          saveClip: TQ,
          setRecorderPrefs: TQ,
          setReplayViewerOpen: TQ
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => wQ.d,
          worldCodeAiGameState: () => wQ.h
        },
        lookups: {
          localPos: () => zQ,
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
  40822: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => HQ,
      g: () => dQ,
      i: () => aQ,
      j: () => vQ,
      k: () => UQ
    });
    var wQ = XQ(39527),
      qQ = XQ(1257),
      TQ = XQ(2036),
      zQ = XQ(2048),
      sQ = XQ(3555),
      FQ = XQ(37112),
      PQ = XQ(1376),
      gQ = XQ(40829),
      JQ = XQ(5153),
      rQ = XQ(2506),
      IQ = XQ(40835),
      jQ = XQ(40837),
      BQ = XQ(40871);
    let yQ = null;

    function VQ(QQ) {
      const WQ = new Map,
        XQ = XQ => {
          if ("string" !== typeof XQ) return;
          let wQ = WQ.get(XQ);
          return void 0 === wQ && (wQ = QQ(XQ), void 0 !== wQ && WQ.set(XQ, wQ)), wQ
        };
      return new Proxy({}, {
        get: (QQ, WQ) => XQ(WQ),
        has: (QQ, WQ) => void 0 !== XQ(WQ)
      })
    }

    function DQ(QQ) {
      const WQ = (0, sQ.c)(QQ);
      return void 0 !== WQ && (0, sQ.e)(WQ) === QQ
    }

    function pQ(QQ) {
      var WQ;
      const XQ = null === (WQ = (0, gQ.j)()) || void 0 === WQ ? void 0 : WQ.tables;
      if (void 0 === XQ || !DQ(QQ)) return;
      const wQ = {
          displayName: XQ.getDisplayName(QQ)
        },
        qQ = XQ.getItemStat(QQ, "description");
      void 0 !== qQ && null !== qQ && (wQ.description = qQ);
      const {
        rootName: TQ
      } = XQ.getMetaInfo(QQ);
      TQ !== QQ && (wQ.rootName = TQ);
      const zQ = XQ.getItemStat(QQ, "armourReduction");
      return void 0 !== zQ && null !== zQ && (wQ.armourReduction = zQ), wQ
    }(0, gQ.y)((QQ => {
      yQ = QQ
    }));
    const GQ = (0, zQ.f)("DisplayName", "Description");

    function UQ() {
      return Boolean(TQ.e.get("useInventory") && TQ.e.get("useFullInventory"))
    }
    let bQ = null;
    const vQ = {
        inventory: function() {
          const QQ = BQ.d.states.inventory;
          let WQ = null;
          const XQ = QQ => {
            var XQ;
            return null === QQ.chest ? QQ : ((null === (XQ = WQ) || void 0 === XQ ? void 0 : XQ.from) === QQ && WQ.chestVersion === (0, jQ.c)() || (WQ = {
              from: QQ,
              chestVersion: (0, jQ.c)(),
              view: {
                ...QQ,
                chest: (0, jQ.j)(QQ.chest)
              }
            }), WQ.view)
          };
          return {
            current: () => XQ(QQ.current()),
            watch: WQ => QQ.watch((QQ => {
              WQ(XQ(QQ))
            }))
          }
        }(),
        crafting: BQ.d.states.crafting,
        stationItems: {
          current() {
            var QQ;
            return (null === (QQ = bQ) || void 0 === QQ ? void 0 : QQ.namesVersion) !== (0, sQ.f)() && (bQ = {
              namesVersion: (0, sQ.f)(),
              items: {
                enchantable: VQ((QQ => {
                  const WQ = (0, sQ.c)(QQ);
                  return void 0 !== WQ && null !== yQ && yQ.enchantmentPerksOf(WQ).length > 0 || void 0
                })),
                salvageable: VQ((QQ => !(!DQ(QQ) || null === (0, FQ.b)(QQ)) || void 0))
              }
            }), bQ.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let QQ = null;
          const WQ = () => {
            var WQ;
            return (null === (WQ = QQ) || void 0 === WQ ? void 0 : WQ.namesVersion) !== (0, sQ.f)() && (QQ = {
              namesVersion: (0, sQ.f)(),
              infos: VQ(pQ)
            }), QQ.infos
          };
          return {
            current: WQ,
            watch: XQ => (0, zQ.k)((wQ => {
              wQ.some(GQ) && (QQ = null, XQ(WQ()))
            }))
          }
        }(),
        creativeVisibility: (0, zQ.h)((function() {
          const QQ = {};
          for (const qQ of null !== (WQ = null === (XQ = yQ) || void 0 === XQ ? void 0 : XQ.creativeItemIds()) && void 0 !== WQ ? WQ : []) {
            var WQ, XQ, zQ, FQ;
            const PQ = (0, sQ.e)(qQ);
            if (void 0 === PQ) continue;
            const gQ = null !== (zQ = TQ.e.get((0, wQ.f)(PQ, "showInCreativeInven"))) && void 0 !== zQ ? zQ : null === (FQ = yQ) || void 0 === FQ ? void 0 : FQ.showInCreativeInvenOf(qQ);
            "boolean" === typeof gQ && (QQ[PQ] = gQ)
          }
          return {
            publicLobby: (0, qQ.I)((0, PQ.e)().lobbyName),
            shownInGame: QQ
          }
        }), ["connectedGameChanged"], (0, zQ.f)("ShowInCreativeInven")),
        fullInventory: (0, zQ.h)(UQ, [], (0, zQ.g)("useInventory", "useFullInventory"))
      },
      dQ = {
        inventoryDropRequested: BQ.d.events.inventoryDropRequested,
        chestToggled: BQ.d.events.chestToggled,
        chestRefreshed: BQ.d.events.chestRefreshed,
        inventorySynced: BQ.d.events.inventorySynced,
        enchantingTableOpened: BQ.d.events.enchantingTableOpened
      },
      HQ = {
        removeInventoryItem: BQ.d.commands.removeInventoryItem,
        swapInventorySlots: BQ.d.commands.swapInventorySlots,
        moveInventoryItem: BQ.d.commands.moveInventoryItem,
        quickMoveInventoryItem: BQ.d.commands.quickMoveInventoryItem,
        closeChest: BQ.d.commands.closeChest,
        setInventoryOpen(QQ) {
          (0, JQ.i)(rQ.x.InventoryOpen, QQ ? rQ.x.InventoryOpen : 0)
        },
        focusCrafting: BQ.d.commands.focusCrafting,
        craftRecipe: BQ.d.commands.craftRecipe,
        salvageItem: BQ.d.commands.salvageItem,
        enchantItem: BQ.d.commands.enchantItem,
        changeIronChestPasskey(QQ) {
          var WQ;
          let {
            pos: XQ,
            ys: wQ
          } = QQ;
          null === (WQ = (0, gQ.j)()) || void 0 === WQ || WQ.send(IQ.d.ChangeIronChestPasskey, (0, IQ.g)({
            Sq: XQ,
            ys: wQ
          }))
        },
        openIronChest(QQ) {
          var WQ;
          let {
            pos: XQ,
            ys: wQ
          } = QQ;
          null === (WQ = (0, gQ.j)()) || void 0 === WQ || WQ.send(IQ.d.OpenIronChest, (0, IQ.z)({
            Sq: XQ,
            ys: wQ
          }))
        }
      },
      aQ = {
        enchantingOffer: BQ.d.queries.enchantingOffer
      }
  },
  40864: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => wQ,
      g: () => gQ,
      h: () => zQ,
      j: () => qQ,
      m: () => sQ,
      n: () => PQ
    });
    class wQ extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function qQ(QQ) {
      return QQ instanceof RangeError && /call stack/i.test(QQ.message) || QQ instanceof Error && "InternalError" === QQ.name && /recursion/i.test(QQ.message)
    }
    const TQ = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function zQ(QQ) {
      var WQ;
      return QQ instanceof WebAssembly.RuntimeError || QQ instanceof wQ || qQ(QQ) && TQ.test(null !== (WQ = QQ.stack) && void 0 !== WQ ? WQ : "")
    }

    function sQ(QQ, WQ) {
      if (zQ(QQ)) throw QQ;
      console.error(WQ, QQ)
    }

    function FQ(QQ, WQ, XQ, qQ, TQ) {
      if (WQ % qQ !== 0 || WQ + XQ > QQ.byteLength) throw new wQ(`${TQ}: ${XQ} bytes at ${WQ}, ${qQ}-aligned, outside ${QQ.byteLength} bytes of memory`)
    }

    function PQ(QQ, WQ, XQ, wQ, qQ) {
      return 0 === XQ ? null : (FQ(WQ, XQ, wQ * QQ.BYTES_PER_ELEMENT, QQ.BYTES_PER_ELEMENT, qQ), new QQ(WQ, XQ, wQ))
    }

    function gQ(QQ, WQ, XQ, wQ, qQ) {
      return 0 === WQ ? null : (FQ(QQ, WQ, XQ, wQ, qQ), new DataView(QQ, WQ, XQ))
    }
  },
  40829: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      B: () => jQ,
      c: () => wQ,
      f: () => VQ,
      j: () => BQ,
      m: () => yQ,
      p: () => rQ,
      t: () => IQ,
      u: () => gQ,
      y: () => JQ
    });
    class wQ extends Error {
      constructor(QQ) {
        super(`the join's code did not load: ${QQ instanceof Error?QQ.message:String(QQ)}`, {
          cause: QQ
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === QQ || void 0 === QQ ? void 0 : QQ.request
      }
    }
    let qQ = null,
      TQ = null,
      zQ = null;
    const sQ = [];
    let FQ = null;

    function PQ(QQ, WQ) {
      try {
        QQ(WQ)
      } catch (XQ) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", XQ)
      }
    }

    function gQ() {
      return FQ
    }

    function JQ(QQ) {
      sQ.push(QQ), null !== FQ && PQ(QQ, FQ)
    }

    function rQ(QQ) {
      return qQ ??= Promise.all([XQ.e(75), XQ.e(101), XQ.e(230), XQ.e(80), XQ.e(231), XQ.e(206), XQ.e(100), XQ.e(250), XQ.e(277), XQ.e(204), XQ.e(218), XQ.e(203), XQ.e(193), XQ.e(195), XQ.e(146), XQ.e(91), XQ.e(124), XQ.e(256), XQ.e(59)]).then((() => XQ(42859))).then((WQ => {
        WQ.loadAudio(QQ), FQ = WQ;
        for (const QQ of sQ) PQ(QQ, WQ);
        return WQ
      })).catch((QQ => {
        throw qQ = null, QQ
      })), qQ
    }
    async function IQ(QQ, WQ) {
      try {
        const XQ = await rQ(QQ);
        await XQ.loadClientGame(WQ)
      } catch (XQ) {
        throw new wQ(XQ)
      }
    }

    function jQ(QQ, WQ) {
      TQ = {
        running: QQ,
        shell: WQ
      }
    }

    function BQ() {
      return zQ
    }
    async function yQ(QQ) {
      const WQ = TQ;
      if ((null === WQ || void 0 === WQ ? void 0 : WQ.running) !== QQ) throw new Error("the core's session has ended");
      const XQ = await rQ(WQ.shell.audio).catch((QQ => {
        throw new wQ(QQ)
      }));
      if (null !== zQ) return zQ;
      if (TQ !== WQ || QQ.isStopped) throw new Error("the core stopped while the game code loaded");
      if (zQ = XQ.startGameHost(QQ, WQ.shell), null === zQ) throw new Error("the core's shared tables didn't read, so the game can't start");
      return zQ
    }

    function VQ() {
      null !== zQ && (null !== FQ ? FQ.endGameHost(zQ) : zQ.closeGame()), zQ = null, TQ = null
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);