export const id = 218;
export const ids = [218];
export const modules = {
  39237: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb,
      g: () => Ob
    });
    const Bb = "The world isn't loaded, so no blocks can be seen.",
      Ob = "The world isn't loaded, so nothing in it can be seen."
  },
  38727: (bb, ub, hb) => {
    function Bb(bb) {
      return !(!bb.lobbyLeaderboardInfo && !bb.lobbyManage)
    }
    hb.d(ub, {
      c: () => Bb
    })
  },
  36452: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Gb,
      h: () => Ob
    });
    let Bb = () => null;

    function Ob(bb) {
      Bb = bb
    }

    function Gb(bb, ub) {
      return Bb(bb, ub)
    }
  },
  40059: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => pb,
      f: () => Kb,
      h: () => lb,
      l: () => ob
    });
    var Bb = hb(16),
      Ob = hb(40061),
      Gb = hb(40049),
      Ub = hb(40063),
      Lb = hb(40052),
      Yb = hb(40066),
      Sb = hb(40087);

    function ab(bb) {
      var ub, hb;
      const Bb = (0, Gb.l)();
      return Bb ? null === (ub = (0, Ob.b)(Bb.api, bb[0], bb[1], bb[2])) || void 0 === ub || null === (hb = ub.persisted) || void 0 === hb ? void 0 : hb.shared : void 0
    }

    function Hb(bb) {
      return `${bb[0]},${bb[1]},${bb[2]}`
    }
    const wb = new Map;
    let Zb = null,
      Xb = 0;

    function pb() {
      return Xb
    }

    function ob(bb) {
      const ub = null !== Zb && Zb.key === Hb(bb.pos) ? Zb.type : null;
      if (null === ub) return bb;
      let hb = null;
      if ("Iron" === ub) {
        const {
          cachedPasskey: ub,
          ...Bb
        } = Ab(bb.pos);
        hb = {
          Ya: null !== ub && void 0 !== ub ? ub : [0, 0, 0, 0],
          ...Bb
        }
      }
      return {
        ...bb,
        type: ub,
        ironChest: hb
      }
    }

    function Ab(bb) {
      const ub = ab(bb),
        hb = null === ub || void 0 === ub ? void 0 : ub.ownerDbId,
        Bb = function(bb) {
          var ub;
          let hb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ab(bb);
          const Bb = Hb(bb),
            Ob = wb.get(Bb);
          return Ob ? Ob.lastOpened < (null !== (ub = null === hb || void 0 === hb ? void 0 : hb.passkeyLastUpdated) && void 0 !== ub ? ub : 0) ? (wb.delete(Bb), null) : [...Ob.Ya] : null
        }(bb, ub);
      return void 0 === hb ? {
        cachedPasskey: Bb
      } : {
        ownerDbId: hb,
        cachedPasskey: Bb
      }
    }(0, Sb.n)(Ub.b, (bb => {
      const ub = (0, Yb.g)(Ub.b, bb);
      if (!(0, Yb.d)(ub) || ub.kb) return;
      if (Xb++, !ub.Eb || null === ub.Fb) return void(Zb = null);
      const hb = Hb(ub.Fb);
      Zb = {
        key: hb,
        type: ub.Vb
      }, null !== ub.fb && wb.set(hb, {
        Ya: [...ub.fb],
        lastOpened: Date.now()
      })
    })), (0, Sb.i)((() => {
      wb.clear(), Zb = null, Xb++
    })), (0, Sb.j)((() => {
      null !== Zb && (Zb = null, Xb++, Bb.i.vp("chestToggleFromServer", !1, !0))
    }));
    const lb = {
        boardEditRequested: {
          watch: bb => (0, Bb.l)("EditBoard", (ub => {
            let {
              pos: hb
            } = ub;
            if (null === hb) return void bb(null);
            const Bb = (0, Gb.l)(),
              Ob = (0, Gb.t)();
            Bb && Ob && bb(Ob.readBoardToEdit(Bb.api, Bb.chunks, hb))
          }))
        },
        ironChestOpenRequested: {
          watch: bb => (0, Bb.l)("OpenIronChest", (ub => {
            let {
              pos: hb
            } = ub;
            bb(function(bb) {
              return {
                pos: bb,
                ...Ab(bb)
              }
            }(hb))
          }))
        }
      },
      Kb = {
        writeOnBoard(bb) {
          var ub;
          let {
            pos: hb,
            text: Bb,
            textSize: Ob
          } = bb;
          null === (ub = (0, Gb.l)()) || void 0 === ub || ub.send(Lb.e.UpdateBoard, (0, Lb.Z)({
            Ba: hb,
            Oa: Bb,
            Ga: Ob
          }))
        },
        writeBook(bb) {
          var ub;
          let {
            pages: hb,
            title: Bb,
            published: Ob
          } = bb;
          null === (ub = (0, Gb.l)()) || void 0 === ub || ub.send(Lb.e.UpdateBook, (0, Lb.$)({
            KS: hb,
            WS: Bb,
            CS: Ob
          }))
        },
        writeNameTag(bb) {
          var ub;
          null === (ub = (0, Gb.l)()) || void 0 === ub || ub.send(Lb.e.UpdateNameTag, bb)
        },
        setCustomLobbyBlock(bb) {
          let {
            pos: ub,
            blockName: hb
          } = bb;
          const Bb = (0, Gb.t)(),
            Ob = (0, Gb.l)();
          Bb && Ob && Ob.send(Lb.e.SetCustomLobbyBlock, (0, Lb.K)({
            bS: Bb.blockIdOf(hb),
            RY: ub
          }))
        }
      }
  },
  40106: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Yb,
      h: () => Ub,
      k: () => Lb
    });
    var Bb = hb(40035),
      Ob = hb(4545),
      Gb = hb(40049);

    function Ub() {
      var bb;
      const ub = null === (bb = (0, Gb.l)()) || void 0 === bb ? void 0 : bb.api.localId;
      return void 0 === ub || ub === Bb.ad ? null : String(ub)
    }

    function Lb(bb) {
      const ub = (0, Gb.l)();
      if (null !== ub) return bb(ub);
      let hb = null;
      const Bb = (0, Ob.u)((() => {
        const ub = (0, Gb.l)();
        null !== ub && null === hb && (Bb(), hb = bb(ub))
      }));
      return () => {
        var bb;
        Bb(), null === (bb = hb) || void 0 === bb || bb()
      }
    }

    function Yb(bb, ub, hb) {
      return {
        current: () => {
          const hb = (0, Gb.l)();
          return null === hb ? ub : bb(hb)()
        },
        watch: ub => Lb((Bb => {
          const Ob = bb(Bb);
          let Gb = Ob();
          return ub(Gb), hb((() => {
            const bb = Ob();
            bb !== Gb && (Gb = bb, ub(bb))
          }))
        }))
      }
    }
  },
  40100: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Sb
    });
    var Bb = hb(40049),
      Ob = hb(40106),
      Gb = hb(40114);

    function Ub() {
      var bb, ub;
      return null !== (bb = null === (ub = (0, Bb.l)()) || void 0 === ub ? void 0 : ub.itemBridgeSources) && void 0 !== bb ? bb : Gb.e
    }

    function Lb(bb) {
      return {
        current: () => Ub().states[bb].current(),
        watch: ub => (0, Ob.k)((hb => {
          const Bb = hb.itemBridgeSources.states[bb];
          return ub(Bb.current()), Bb.watch(ub)
        }))
      }
    }

    function Yb(bb) {
      return {
        watch: ub => (0, Ob.k)((hb => hb.itemBridgeSources.events[bb].watch(ub)))
      }
    }
    const Sb = {
      states: {
        inventory: Lb("inventory"),
        hotbar: Lb("hotbar"),
        crafting: Lb("crafting"),
        heldItemAim: Lb("heldItemAim")
      },
      events: {
        hotbarSlotRequested: Yb("hotbarSlotRequested"),
        hotbarScrolled: Yb("hotbarScrolled"),
        numberKeyPressed: Yb("numberKeyPressed"),
        inventoryDropRequested: Yb("inventoryDropRequested"),
        chestToggled: Yb("chestToggled"),
        chestRefreshed: Yb("chestRefreshed"),
        inventorySynced: Yb("inventorySynced"),
        enchantingTableOpened: Yb("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: bb => Ub().commands.selectHotbarSlot(bb),
        removeInventoryItem: bb => Ub().commands.removeInventoryItem(bb),
        swapInventorySlots: bb => Ub().commands.swapInventorySlots(bb),
        moveInventoryItem: bb => Ub().commands.moveInventoryItem(bb),
        quickMoveInventoryItem: bb => Ub().commands.quickMoveInventoryItem(bb),
        closeChest: bb => Ub().commands.closeChest(bb),
        focusCrafting: bb => Ub().commands.focusCrafting(bb),
        craftRecipe: bb => Ub().commands.craftRecipe(bb),
        salvageItem: bb => Ub().commands.salvageItem(bb),
        enchantItem: bb => Ub().commands.enchantItem(bb)
      },
      queries: {
        enchantingOffer: bb => Ub().queries.enchantingOffer(bb)
      }
    }
  },
  40114: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => Lb
    });
    var Bb = hb(39237);

    function Ob(bb) {
      return {
        current: () => bb,
        watch: () => () => {}
      }
    }

    function Gb() {}
    const Ub = Object.freeze([0, 0, 0]),
      Lb = {
        states: {
          health: Ob({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Ob({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Ob({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Ob({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Ob({}),
          creativeVisibility: Ob({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Ob(null),
          heldItemAim: Ob({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Ob(!1),
          gliderBoostFuel: Ob(0),
          flight: Ob({
            canFly: !1,
            flying: !1
          }),
          crafting: Ob({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Ob({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Ob({}),
          fullInventory: Ob(!1),
          crosshairTarget: Ob({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Ob(!0),
          freeCamera: Ob({
            allowed: !1,
            movesFly: !1
          }),
          replay: Ob(null),
          replayEdits: Ob(null),
          replayRecorder: Ob({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: Ob(!1)
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
          selectHotbarSlot: Gb,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Gb,
          setInventoryOpen: Gb,
          changeIronChestPasskey: Gb,
          dragReplayCamera: Gb,
          applyTemporaryThirdPerson: Gb,
          holdEmoteWheel: Gb,
          recordFlyingMiddleText: Gb,
          focusCrafting: Gb,
          craftRecipe: () => ({
            aS: 0,
            fY: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Gb,
          setShopOpen: Gb,
          buyShopItem: Gb,
          lobbyManage: Gb,
          sendChatMessage: Gb,
          ignorePlayer: Gb,
          reportPlayer: Gb,
          reportWorldCodeChat: Gb,
          requestDiscordReportKey: Gb,
          reportLobbyOrGame: Gb,
          playEmote: Gb,
          updateMyCosmetic: Gb,
          writeOnBoard: Gb,
          writeBook: Gb,
          writeNameTag: Gb,
          setCustomLobbyBlock: Gb,
          openIronChest: Gb,
          sendCodeCollab: Gb,
          clickCodeBlock: Gb,
          bindCustomButtonKeys: Gb,
          pressCustomButton: Gb,
          moveReplayFreecam: Gb,
          holdReplayFreecamVertical: Gb,
          respawn: Gb,
          wakeUp: Gb,
          requestLeaderboard: Gb,
          completeTask: Gb,
          setServerCookie: Gb,
          answerUiRequest: Gb,
          chooseRewardedAd: Gb,
          setCameraZoom: Gb,
          setFreeCameraMovesFly: Gb,
          setBlockHighlight: Gb,
          setCrosshairInteractPrompt: Gb,
          setLookSensitivity: Gb,
          replayAction: Gb,
          setReplayPlaying: Gb,
          seekReplay: Gb,
          setReplayCameraMode: Gb,
          syncReplayCameraMode: Gb,
          setReplayCameraKeyframe: Gb,
          moveReplayCameraKeyframe: Gb,
          deleteReplayCameraKeyframes: Gb,
          setReplayPlaybackMark: Gb,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Gb,
          exportReplayVideo: Gb,
          toggleRecording: Gb,
          saveClip: Gb,
          setRecorderPrefs: Gb,
          setReplayViewerOpen: Gb
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Bb.d,
          worldCodeAiGameState: () => Bb.g
        },
        lookups: {
          localPos: () => Ub,
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
  40040: (bb, ub, hb) => {
    hb.d(ub, {
      e: () => nb,
      i: () => jb,
      k: () => Db,
      m: () => rb,
      p: () => Cb
    });
    var Bb = hb(38853),
      Ob = hb(1124),
      Gb = hb(1836),
      Ub = hb(1850),
      Lb = hb(3063),
      Yb = hb(36452),
      Sb = hb(1218),
      ab = hb(40049),
      Hb = hb(4584),
      wb = hb(2273),
      Zb = hb(40052),
      Xb = hb(40059),
      pb = hb(40100);
    let ob = null;

    function Ab(bb) {
      const ub = new Map,
        hb = hb => {
          if ("string" !== typeof hb) return;
          let Bb = ub.get(hb);
          return void 0 === Bb && (Bb = bb(hb), void 0 !== Bb && ub.set(hb, Bb)), Bb
        };
      return new Proxy({}, {
        get: (bb, ub) => hb(ub),
        has: (bb, ub) => void 0 !== hb(ub)
      })
    }

    function lb(bb) {
      const ub = (0, Lb.e)(bb);
      return void 0 !== ub && (0, Lb.f)(ub) === bb
    }

    function Kb(bb) {
      var ub;
      const hb = null === (ub = (0, ab.l)()) || void 0 === ub ? void 0 : ub.tables;
      if (void 0 === hb || !lb(bb)) return;
      const Bb = {
          displayName: hb.getDisplayName(bb)
        },
        Ob = hb.getItemStat(bb, "description");
      void 0 !== Ob && null !== Ob && (Bb.description = Ob);
      const {
        rootName: Gb
      } = hb.getMetaInfo(bb);
      Gb !== bb && (Bb.rootName = Gb);
      const Ub = hb.getItemStat(bb, "armourReduction");
      return void 0 !== Ub && null !== Ub && (Bb.armourReduction = Ub), Bb
    }(0, ab.u)((bb => {
      ob = bb
    }));
    const Wb = (0, Ub.j)("DisplayName", "Description");

    function Cb() {
      return Boolean(Gb.b.get("useInventory") && Gb.b.get("useFullInventory"))
    }
    let db = null;
    const rb = {
        inventory: function() {
          const bb = pb.e.states.inventory;
          let ub = null;
          const hb = bb => {
            var hb;
            return null === bb.chest ? bb : ((null === (hb = ub) || void 0 === hb ? void 0 : hb.from) === bb && ub.chestVersion === (0, Xb.e)() || (ub = {
              from: bb,
              chestVersion: (0, Xb.e)(),
              view: {
                ...bb,
                chest: (0, Xb.l)(bb.chest)
              }
            }), ub.view)
          };
          return {
            current: () => hb(bb.current()),
            watch: ub => bb.watch((bb => {
              ub(hb(bb))
            }))
          }
        }(),
        crafting: pb.e.states.crafting,
        stationItems: {
          current() {
            var bb;
            return (null === (bb = db) || void 0 === bb ? void 0 : bb.namesVersion) !== (0, Lb.g)() && (db = {
              namesVersion: (0, Lb.g)(),
              items: {
                enchantable: Ab((bb => {
                  const ub = (0, Lb.e)(bb);
                  return void 0 !== ub && null !== ob && ob.enchantmentPerksOf(ub).length > 0 || void 0
                })),
                salvageable: Ab((bb => !(!lb(bb) || null === (0, Yb.d)(bb)) || void 0))
              }
            }), db.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let bb = null;
          const ub = () => {
            var ub;
            return (null === (ub = bb) || void 0 === ub ? void 0 : ub.namesVersion) !== (0, Lb.g)() && (bb = {
              namesVersion: (0, Lb.g)(),
              infos: Ab(Kb)
            }), bb.infos
          };
          return {
            current: ub,
            watch: hb => (0, Ub.s)((Bb => {
              Bb.some(Wb) && (bb = null, hb(ub()))
            }))
          }
        }(),
        creativeVisibility: (0, Ub.m)((function() {
          const bb = {};
          for (const Ob of null !== (ub = null === (hb = ob) || void 0 === hb ? void 0 : hb.creativeItemIds()) && void 0 !== ub ? ub : []) {
            var ub, hb, Ub, Yb;
            const Sb = (0, Lb.f)(Ob);
            if (void 0 === Sb) continue;
            const ab = null !== (Ub = Gb.b.get((0, Bb.e)(Sb, "showInCreativeInven"))) && void 0 !== Ub ? Ub : null === (Yb = ob) || void 0 === Yb ? void 0 : Yb.showInCreativeInvenOf(Ob);
            "boolean" === typeof ab && (bb[Sb] = ab)
          }
          return {
            publicLobby: (0, Ob.X)((0, Sb.b)().lobbyName),
            shownInGame: bb
          }
        }), ["connectedGameChanged"], (0, Ub.j)("ShowInCreativeInven")),
        fullInventory: (0, Ub.m)(Cb, [], (0, Ub.k)("useInventory", "useFullInventory"))
      },
      jb = {
        inventoryDropRequested: pb.e.events.inventoryDropRequested,
        chestToggled: pb.e.events.chestToggled,
        chestRefreshed: pb.e.events.chestRefreshed,
        inventorySynced: pb.e.events.inventorySynced,
        enchantingTableOpened: pb.e.events.enchantingTableOpened
      },
      nb = {
        removeInventoryItem: pb.e.commands.removeInventoryItem,
        swapInventorySlots: pb.e.commands.swapInventorySlots,
        moveInventoryItem: pb.e.commands.moveInventoryItem,
        quickMoveInventoryItem: pb.e.commands.quickMoveInventoryItem,
        closeChest: pb.e.commands.closeChest,
        setInventoryOpen(bb) {
          (0, Hb.j)(wb.t.InventoryOpen, bb ? wb.t.InventoryOpen : 0)
        },
        focusCrafting: pb.e.commands.focusCrafting,
        craftRecipe: pb.e.commands.craftRecipe,
        salvageItem: pb.e.commands.salvageItem,
        enchantItem: pb.e.commands.enchantItem,
        changeIronChestPasskey(bb) {
          var ub;
          let {
            pos: hb,
            Ya: Bb
          } = bb;
          null === (ub = (0, ab.l)()) || void 0 === ub || ub.send(Zb.e.ChangeIronChestPasskey, (0, Zb.i)({
            Fb: hb,
            Ya: Bb
          }))
        },
        openIronChest(bb) {
          var ub;
          let {
            pos: hb,
            Ya: Bb
          } = bb;
          null === (ub = (0, ab.l)()) || void 0 === ub || ub.send(Zb.e.OpenIronChest, (0, Zb.F)({
            Fb: hb,
            Ya: Bb
          }))
        }
      },
      Db = {
        enchantingOffer: pb.e.queries.enchantingOffer
      }
  },
  40095: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb,
      e: () => Hb,
      h: () => Lb,
      l: () => Gb,
      m: () => Ob,
      q: () => Yb,
      t: () => ab
    });
    class Bb extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Ob(bb) {
      return bb instanceof RangeError && /call stack/i.test(bb.message) || bb instanceof Error && "InternalError" === bb.name && /recursion/i.test(bb.message)
    }

    function Gb(bb) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(bb))
    }
    const Ub = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function Lb(bb) {
      var ub;
      return bb instanceof WebAssembly.RuntimeError || bb instanceof Bb || Ob(bb) && Ub.test(null !== (ub = bb.stack) && void 0 !== ub ? ub : "")
    }

    function Yb(bb, ub) {
      if (Lb(bb)) throw bb;
      console.error(ub, bb)
    }

    function Sb(bb, ub, hb, Ob, Gb) {
      if (ub % Ob !== 0 || ub + hb > bb.byteLength) throw new Bb(`${Gb}: ${hb} bytes at ${ub}, ${Ob}-aligned, outside ${bb.byteLength} bytes of memory`)
    }

    function ab(bb, ub, hb, Bb, Ob) {
      return 0 === hb ? null : (Sb(ub, hb, Bb * bb.BYTES_PER_ELEMENT, bb.BYTES_PER_ELEMENT, Ob), new bb(ub, hb, Bb))
    }

    function Hb(bb, ub, hb, Bb, Ob) {
      return 0 === ub ? null : (Sb(bb, ub, hb, Bb, Ob), new DataView(bb, ub, hb))
    }
  },
  40049: (bb, ub, hb) => {
    hb.d(ub, {
      d: () => Bb,
      h: () => Ab,
      l: () => pb,
      n: () => ob,
      p: () => wb,
      s: () => Zb,
      t: () => ab,
      u: () => Hb,
      x: () => Xb
    });
    class Bb extends Error {
      constructor(bb) {
        super(`the join's code did not load: ${bb instanceof Error?bb.message:String(bb)}`, {
          cause: bb
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === bb || void 0 === bb ? void 0 : bb.request
      }
    }
    let Ob = null,
      Gb = null,
      Ub = null;
    const Lb = [];
    let Yb = null;

    function Sb(bb, ub) {
      try {
        bb(ub)
      } catch (hb) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", hb)
      }
    }

    function ab() {
      return Yb
    }

    function Hb(bb) {
      Lb.push(bb), null !== Yb && Sb(bb, Yb)
    }

    function wb(bb) {
      return Ob ??= Promise.all([hb.e(70), hb.e(95), hb.e(216), hb.e(75), hb.e(217), hb.e(190), hb.e(94), hb.e(235), hb.e(261), hb.e(188), hb.e(263), hb.e(200), hb.e(187), hb.e(201), hb.e(137), hb.e(86), hb.e(115), hb.e(239), hb.e(54)]).then((() => hb(41994))).then((ub => {
        ub.loadAudio(bb), Yb = ub;
        for (const bb of Lb) Sb(bb, ub);
        return ub
      })).catch((bb => {
        throw Ob = null, bb
      })), Ob
    }
    async function Zb(bb, ub) {
      try {
        const hb = await wb(bb);
        await hb.loadClientGame(ub)
      } catch (hb) {
        throw new Bb(hb)
      }
    }

    function Xb(bb, ub) {
      Gb = {
        running: bb,
        shell: ub
      }
    }

    function pb() {
      return Ub
    }
    async function ob(bb) {
      const ub = Gb;
      if ((null === ub || void 0 === ub ? void 0 : ub.running) !== bb) throw new Error("the core's session has ended");
      const hb = await wb(ub.shell.audio).catch((bb => {
        throw new Bb(bb)
      }));
      if (null !== Ub) return Ub;
      if (Gb !== ub || bb.isStopped) throw new Error("the core stopped while the game code loaded");
      if (Ub = hb.startGameHost(bb, ub.shell), null === Ub) throw new Error("the core's shared tables didn't read, so the game can't start");
      return Ub
    }

    function Ab() {
      null !== Ub && (null !== Yb ? Yb.endGameHost(Ub) : Ub.closeGame()), Ub = null, Gb = null
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);