export const id = 216;
export const ids = [216];
export const modules = {
  38865: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab,
      f: () => Mb
    });
    const Ab = "The world isn't loaded, so no blocks can be seen.",
      Mb = "The world isn't loaded, so nothing in it can be seen."
  },
  36133: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Tb,
      g: () => Mb
    });
    let Ab = () => null;

    function Mb(bb) {
      Ab = bb
    }

    function Tb(bb, ab) {
      return Ab(bb, ab)
    }
  },
  39723: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Rb,
      e: () => Db,
      i: () => Zb,
      m: () => kb
    });
    var Ab = Ub(22),
      Mb = Ub(39731),
      Tb = Ub(39714),
      Eb = Ub(39740),
      Yb = Ub(39716),
      Bb = Ub(39742),
      eb = Ub(39762);

    function vb(bb) {
      var ab, Ub;
      const Ab = (0, Tb.i)();
      return Ab ? null === (ab = (0, Mb.d)(Ab.api, bb[0], bb[1], bb[2])) || void 0 === ab || null === (Ub = ab.persisted) || void 0 === Ub ? void 0 : Ub.shared : void 0
    }

    function Lb(bb) {
      return `${bb[0]},${bb[1]},${bb[2]}`
    }
    const Pb = new Map;
    let Xb = null,
      jb = 0;

    function Rb() {
      return jb
    }

    function kb(bb) {
      const ab = null !== Xb && Xb.key === Lb(bb.pos) ? Xb.type : null;
      if (null === ab) return bb;
      let Ub = null;
      if ("Iron" === ab) {
        const {
          cachedPasskey: ab,
          ...Ab
        } = yb(bb.pos);
        Ub = {
          ve: null !== ab && void 0 !== ab ? ab : [0, 0, 0, 0],
          ...Ab
        }
      }
      return {
        ...bb,
        type: ab,
        ironChest: Ub
      }
    }

    function yb(bb) {
      const ab = vb(bb),
        Ub = null === ab || void 0 === ab ? void 0 : ab.ownerDbId,
        Ab = function(bb) {
          var ab;
          let Ub = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : vb(bb);
          const Ab = Lb(bb),
            Mb = Pb.get(Ab);
          return Mb ? Mb.lastOpened < (null !== (ab = null === Ub || void 0 === Ub ? void 0 : Ub.passkeyLastUpdated) && void 0 !== ab ? ab : 0) ? (Pb.delete(Ab), null) : [...Mb.ve] : null
        }(bb, ab);
      return void 0 === Ub ? {
        cachedPasskey: Ab
      } : {
        ownerDbId: Ub,
        cachedPasskey: Ab
      }
    }(0, eb.k)(Eb.b, (bb => {
      const ab = (0, Bb.f)(Eb.b, bb);
      if (!(0, Bb.e)(ab) || ab.KT) return;
      if (jb++, !ab.GT || null === ab.uT) return void(Xb = null);
      const Ub = Lb(ab.uT);
      Xb = {
        key: Ub,
        type: ab.qT
      }, null !== ab.rT && Pb.set(Ub, {
        ve: [...ab.rT],
        lastOpened: Date.now()
      })
    })), (0, eb.d)((() => {
      Pb.clear(), Xb = null, jb++
    })), (0, eb.g)((() => {
      null !== Xb && (Xb = null, jb++, Ab.m.IR("chestToggleFromServer", !1, !0))
    }));
    const Zb = {
        boardEditRequested: {
          watch: bb => (0, Ab.n)("EditBoard", (ab => {
            let {
              pos: Ub
            } = ab;
            if (null === Ub) return void bb(null);
            const Ab = (0, Tb.i)(),
              Mb = (0, Tb.r)();
            Ab && Mb && bb(Mb.readBoardToEdit(Ab.api, Ab.chunks, Ub))
          }))
        },
        ironChestOpenRequested: {
          watch: bb => (0, Ab.n)("OpenIronChest", (ab => {
            let {
              pos: Ub
            } = ab;
            bb(function(bb) {
              return {
                pos: bb,
                ...yb(bb)
              }
            }(Ub))
          }))
        }
      },
      Db = {
        writeOnBoard(bb) {
          var ab;
          let {
            pos: Ub,
            text: Ab,
            textSize: Mb
          } = bb;
          null === (ab = (0, Tb.i)()) || void 0 === ab || ab.send(Yb.c.UpdateBoard, (0, Yb.V)({
            TE: Ub,
            EE: Ab,
            YE: Mb
          }))
        },
        writeBook(bb) {
          var ab;
          let {
            pages: Ub,
            title: Ab,
            published: Mb
          } = bb;
          null === (ab = (0, Tb.i)()) || void 0 === ab || ab.send(Yb.c.UpdateBook, (0, Yb.W)({
            BY: Ub,
            eY: Ab,
            vY: Mb
          }))
        },
        writeNameTag(bb) {
          var ab;
          null === (ab = (0, Tb.i)()) || void 0 === ab || ab.send(Yb.c.UpdateNameTag, bb)
        },
        setCustomLobbyBlock(bb) {
          let {
            pos: ab,
            blockName: Ub
          } = bb;
          const Ab = (0, Tb.r)(),
            Mb = (0, Tb.i)();
          Ab && Mb && Mb.send(Yb.c.SetCustomLobbyBlock, (0, Yb.K)({
            Av: Ab.blockIdOf(Ub),
            Uv: ab
          }))
        }
      }
  },
  39772: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => Bb,
      d: () => Eb,
      e: () => Yb
    });
    var Ab = Ub(39701),
      Mb = Ub(4469),
      Tb = Ub(39714);

    function Eb() {
      var bb;
      const ab = null === (bb = (0, Tb.i)()) || void 0 === bb ? void 0 : bb.api.localId;
      return void 0 === ab || ab === Ab.Tc ? null : String(ab)
    }

    function Yb(bb) {
      const ab = (0, Tb.i)();
      if (null !== ab) return bb(ab);
      let Ub = null;
      const Ab = (0, Mb.v)((() => {
        const ab = (0, Tb.i)();
        null !== ab && null === Ub && (Ab(), Ub = bb(ab))
      }));
      return () => {
        var bb;
        Ab(), null === (bb = Ub) || void 0 === bb || bb()
      }
    }

    function Bb(bb, ab, Ub) {
      return {
        current: () => {
          const Ub = (0, Tb.i)();
          return null === Ub ? ab : bb(Ub)()
        },
        watch: ab => Yb((Ab => {
          const Mb = bb(Ab);
          let Tb = Mb();
          return ab(Tb), Ub((() => {
            const bb = Mb();
            bb !== Tb && (Tb = bb, ab(bb))
          }))
        }))
      }
    }
  },
  39769: (bb, ab, Ub) => {
    Ub.d(ab, {
      c: () => eb
    });
    var Ab = Ub(39714),
      Mb = Ub(39772),
      Tb = Ub(39778);

    function Eb() {
      var bb, ab;
      return null !== (bb = null === (ab = (0, Ab.i)()) || void 0 === ab ? void 0 : ab.itemBridgeSources) && void 0 !== bb ? bb : Tb.d
    }

    function Yb(bb) {
      return {
        current: () => Eb().states[bb].current(),
        watch: ab => (0, Mb.e)((Ub => {
          const Ab = Ub.itemBridgeSources.states[bb];
          return ab(Ab.current()), Ab.watch(ab)
        }))
      }
    }

    function Bb(bb) {
      return {
        watch: ab => (0, Mb.e)((Ub => Ub.itemBridgeSources.events[bb].watch(ab)))
      }
    }
    const eb = {
      states: {
        inventory: Yb("inventory"),
        hotbar: Yb("hotbar"),
        crafting: Yb("crafting"),
        heldItemAim: Yb("heldItemAim")
      },
      events: {
        hotbarSlotRequested: Bb("hotbarSlotRequested"),
        hotbarScrolled: Bb("hotbarScrolled"),
        numberKeyPressed: Bb("numberKeyPressed"),
        inventoryDropRequested: Bb("inventoryDropRequested"),
        chestToggled: Bb("chestToggled"),
        chestRefreshed: Bb("chestRefreshed"),
        inventorySynced: Bb("inventorySynced"),
        enchantingTableOpened: Bb("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: bb => Eb().commands.selectHotbarSlot(bb),
        removeInventoryItem: bb => Eb().commands.removeInventoryItem(bb),
        swapInventorySlots: bb => Eb().commands.swapInventorySlots(bb),
        moveInventoryItem: bb => Eb().commands.moveInventoryItem(bb),
        quickMoveInventoryItem: bb => Eb().commands.quickMoveInventoryItem(bb),
        closeChest: bb => Eb().commands.closeChest(bb),
        focusCrafting: bb => Eb().commands.focusCrafting(bb),
        craftRecipe: bb => Eb().commands.craftRecipe(bb),
        salvageItem: bb => Eb().commands.salvageItem(bb),
        enchantItem: bb => Eb().commands.enchantItem(bb)
      },
      queries: {
        enchantingOffer: bb => Eb().queries.enchantingOffer(bb)
      }
    }
  },
  39778: (bb, ab, Ub) => {
    Ub.d(ab, {
      d: () => Yb
    });
    var Ab = Ub(38865);

    function Mb(bb) {
      return {
        current: () => bb,
        watch: () => () => {}
      }
    }

    function Tb() {}
    const Eb = Object.freeze([0, 0, 0]),
      Yb = {
        states: {
          health: Mb({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Mb({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Mb({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Mb({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Mb({}),
          creativeVisibility: Mb({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Mb(null),
          heldItemAim: Mb({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Mb(!1),
          gliderBoostFuel: Mb(0),
          flight: Mb({
            canFly: !1,
            flying: !1
          }),
          crafting: Mb({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Mb({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Mb({}),
          fullInventory: Mb(!1),
          crosshairTarget: Mb({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Mb(!0),
          freeCamera: Mb({
            allowed: !1,
            movesFly: !1
          }),
          replay: Mb(null),
          replayEdits: Mb(null),
          replayRecorder: Mb({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: Mb(!1)
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
          selectHotbarSlot: Tb,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Tb,
          setInventoryOpen: Tb,
          changeIronChestPasskey: Tb,
          dragReplayCamera: Tb,
          applyTemporaryThirdPerson: Tb,
          holdEmoteWheel: Tb,
          recordFlyingMiddleText: Tb,
          focusCrafting: Tb,
          craftRecipe: () => ({
            Ev: 0,
            Qv: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Tb,
          setShopOpen: Tb,
          buyShopItem: Tb,
          sendChatMessage: Tb,
          ignorePlayer: Tb,
          reportPlayer: Tb,
          reportWorldCodeChat: Tb,
          requestDiscordReportKey: Tb,
          reportLobbyOrGame: Tb,
          playEmote: Tb,
          updateMyCosmetic: Tb,
          writeOnBoard: Tb,
          writeBook: Tb,
          writeNameTag: Tb,
          setCustomLobbyBlock: Tb,
          openIronChest: Tb,
          sendCodeCollab: Tb,
          clickCodeBlock: Tb,
          bindCustomButtonKeys: Tb,
          pressCustomButton: Tb,
          moveReplayFreecam: Tb,
          holdReplayFreecamVertical: Tb,
          respawn: Tb,
          wakeUp: Tb,
          requestLeaderboard: Tb,
          completeTask: Tb,
          setServerCookie: Tb,
          answerUiRequest: Tb,
          chooseRewardedAd: Tb,
          setCameraZoom: Tb,
          setFreeCameraMovesFly: Tb,
          setBlockHighlight: Tb,
          setCrosshairInteractPrompt: Tb,
          setLookSensitivity: Tb,
          replayAction: Tb,
          setReplayPlaying: Tb,
          seekReplay: Tb,
          setReplayCameraMode: Tb,
          syncReplayCameraMode: Tb,
          setReplayCameraKeyframe: Tb,
          moveReplayCameraKeyframe: Tb,
          deleteReplayCameraKeyframes: Tb,
          setReplayPlaybackMark: Tb,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Tb,
          exportReplayVideo: Tb,
          toggleRecording: Tb,
          saveClip: Tb,
          setRecorderPrefs: Tb,
          setReplayViewerOpen: Tb
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Ab.e,
          worldCodeAiGameState: () => Ab.f
        },
        lookups: {
          localPos: () => Eb,
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
  39705: (bb, ab, Ub) => {
    Ub.d(ab, {
      b: () => pb,
      e: () => mb,
      h: () => Nb,
      l: () => fb,
      m: () => xb
    });
    var Ab = Ub(38506),
      Mb = Ub(1162),
      Tb = Ub(1844),
      Eb = Ub(1852),
      Yb = Ub(2989),
      Bb = Ub(36133),
      eb = Ub(1242),
      vb = Ub(39714),
      Lb = Ub(4501),
      Pb = Ub(2254),
      Xb = Ub(39716),
      jb = Ub(39723),
      Rb = Ub(39769);
    let kb = null;

    function yb(bb) {
      const ab = new Map,
        Ub = Ub => {
          if ("string" !== typeof Ub) return;
          let Ab = ab.get(Ub);
          return void 0 === Ab && (Ab = bb(Ub), void 0 !== Ab && ab.set(Ub, Ab)), Ab
        };
      return new Proxy({}, {
        get: (bb, ab) => Ub(ab),
        has: (bb, ab) => void 0 !== Ub(ab)
      })
    }

    function Zb(bb) {
      const ab = (0, Yb.d)(bb);
      return void 0 !== ab && (0, Yb.h)(ab) === bb
    }

    function Db(bb) {
      var ab;
      const Ub = null === (ab = (0, vb.i)()) || void 0 === ab ? void 0 : ab.tables;
      if (void 0 === Ub || !Zb(bb)) return;
      const Ab = {
          displayName: Ub.getDisplayName(bb)
        },
        Mb = Ub.getItemStat(bb, "description");
      void 0 !== Mb && null !== Mb && (Ab.description = Mb);
      const {
        rootName: Tb
      } = Ub.getMetaInfo(bb);
      Tb !== bb && (Ab.rootName = Tb);
      const Eb = Ub.getItemStat(bb, "armourReduction");
      return void 0 !== Eb && null !== Eb && (Ab.armourReduction = Eb), Ab
    }(0, vb.u)((bb => {
      kb = bb
    }));
    const zb = (0, Eb.e)("DisplayName", "Description");

    function xb() {
      return Boolean(Tb.e.get("useInventory") && Tb.e.get("useFullInventory"))
    }
    let ib = null;
    const fb = {
        inventory: function() {
          const bb = Rb.c.states.inventory;
          let ab = null;
          const Ub = bb => {
            var Ub;
            return null === bb.chest ? bb : ((null === (Ub = ab) || void 0 === Ub ? void 0 : Ub.from) === bb && ab.chestVersion === (0, jb.b)() || (ab = {
              from: bb,
              chestVersion: (0, jb.b)(),
              view: {
                ...bb,
                chest: (0, jb.m)(bb.chest)
              }
            }), ab.view)
          };
          return {
            current: () => Ub(bb.current()),
            watch: ab => bb.watch((bb => {
              ab(Ub(bb))
            }))
          }
        }(),
        crafting: Rb.c.states.crafting,
        stationItems: {
          current() {
            var bb;
            return (null === (bb = ib) || void 0 === bb ? void 0 : bb.namesVersion) !== (0, Yb.l)() && (ib = {
              namesVersion: (0, Yb.l)(),
              items: {
                enchantable: yb((bb => {
                  const ab = (0, Yb.d)(bb);
                  return void 0 !== ab && null !== kb && kb.enchantmentPerksOf(ab).length > 0 || void 0
                })),
                salvageable: yb((bb => !(!Zb(bb) || null === (0, Bb.e)(bb)) || void 0))
              }
            }), ib.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let bb = null;
          const ab = () => {
            var ab;
            return (null === (ab = bb) || void 0 === ab ? void 0 : ab.namesVersion) !== (0, Yb.l)() && (bb = {
              namesVersion: (0, Yb.l)(),
              infos: yb(Db)
            }), bb.infos
          };
          return {
            current: ab,
            watch: Ub => (0, Eb.r)((Ab => {
              Ab.some(zb) && (bb = null, Ub(ab()))
            }))
          }
        }(),
        creativeVisibility: (0, Eb.m)((function() {
          const bb = {};
          for (const Mb of null !== (ab = null === (Ub = kb) || void 0 === Ub ? void 0 : Ub.creativeItemIds()) && void 0 !== ab ? ab : []) {
            var ab, Ub, Eb, Bb;
            const eb = (0, Yb.h)(Mb);
            if (void 0 === eb) continue;
            const vb = null !== (Eb = Tb.e.get((0, Ab.e)(eb, "showInCreativeInven"))) && void 0 !== Eb ? Eb : null === (Bb = kb) || void 0 === Bb ? void 0 : Bb.showInCreativeInvenOf(Mb);
            "boolean" === typeof vb && (bb[eb] = vb)
          }
          return {
            publicLobby: (0, Mb.R)((0, eb.e)().lobbyName),
            shownInGame: bb
          }
        }), ["connectedGameChanged"], (0, Eb.e)("ShowInCreativeInven")),
        fullInventory: (0, Eb.m)(xb, [], (0, Eb.i)("useInventory", "useFullInventory"))
      },
      mb = {
        inventoryDropRequested: Rb.c.events.inventoryDropRequested,
        chestToggled: Rb.c.events.chestToggled,
        chestRefreshed: Rb.c.events.chestRefreshed,
        inventorySynced: Rb.c.events.inventorySynced,
        enchantingTableOpened: Rb.c.events.enchantingTableOpened
      },
      pb = {
        removeInventoryItem: Rb.c.commands.removeInventoryItem,
        swapInventorySlots: Rb.c.commands.swapInventorySlots,
        moveInventoryItem: Rb.c.commands.moveInventoryItem,
        quickMoveInventoryItem: Rb.c.commands.quickMoveInventoryItem,
        closeChest: Rb.c.commands.closeChest,
        setInventoryOpen(bb) {
          (0, Lb.l)(Pb.v.InventoryOpen, bb ? Pb.v.InventoryOpen : 0)
        },
        focusCrafting: Rb.c.commands.focusCrafting,
        craftRecipe: Rb.c.commands.craftRecipe,
        salvageItem: Rb.c.commands.salvageItem,
        enchantItem: Rb.c.commands.enchantItem,
        changeIronChestPasskey(bb) {
          var ab;
          let {
            pos: Ub,
            ve: Ab
          } = bb;
          null === (ab = (0, vb.i)()) || void 0 === ab || ab.send(Xb.c.ChangeIronChestPasskey, (0, Xb.i)({
            uT: Ub,
            ve: Ab
          }))
        },
        openIronChest(bb) {
          var ab;
          let {
            pos: Ub,
            ve: Ab
          } = bb;
          null === (ab = (0, vb.i)()) || void 0 === ab || ab.send(Xb.c.OpenIronChest, (0, Xb.E)({
            uT: Ub,
            ve: Ab
          }))
        }
      },
      Nb = {
        enchantingOffer: Rb.c.queries.enchantingOffer
      }
  },
  39764: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab,
      f: () => Lb,
      g: () => Yb,
      h: () => Tb,
      k: () => Mb,
      o: () => Bb,
      p: () => vb
    });
    class Ab extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Mb(bb) {
      return bb instanceof RangeError && /call stack/i.test(bb.message) || bb instanceof Error && "InternalError" === bb.name && /recursion/i.test(bb.message)
    }

    function Tb(bb) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(bb))
    }
    const Eb = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function Yb(bb) {
      var ab;
      return bb instanceof WebAssembly.RuntimeError || bb instanceof Ab || Mb(bb) && Eb.test(null !== (ab = bb.stack) && void 0 !== ab ? ab : "")
    }

    function Bb(bb, ab) {
      if (Yb(bb)) throw bb;
      console.error(ab, bb)
    }

    function eb(bb, ab, Ub, Mb, Tb) {
      if (ab % Mb !== 0 || ab + Ub > bb.byteLength) throw new Ab(`${Tb}: ${Ub} bytes at ${ab}, ${Mb}-aligned, outside ${bb.byteLength} bytes of memory`)
    }

    function vb(bb, ab, Ub, Ab, Mb) {
      return 0 === Ub ? null : (eb(ab, Ub, Ab * bb.BYTES_PER_ELEMENT, bb.BYTES_PER_ELEMENT, Mb), new bb(ab, Ub, Ab))
    }

    function Lb(bb, ab, Ub, Ab, Mb) {
      return 0 === ab ? null : (eb(bb, ab, Ub, Ab, Mb), new DataView(bb, ab, Ub))
    }
  },
  39714: (bb, ab, Ub) => {
    Ub.d(ab, {
      e: () => Ab,
      f: () => yb,
      i: () => Rb,
      j: () => kb,
      m: () => Pb,
      p: () => Xb,
      r: () => vb,
      u: () => Lb,
      v: () => jb
    });
    class Ab extends Error {
      constructor(bb) {
        super(`the join's code did not load: ${bb instanceof Error?bb.message:String(bb)}`, {
          cause: bb
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === bb || void 0 === bb ? void 0 : bb.request
      }
    }
    let Mb = null,
      Tb = null,
      Eb = null;
    const Yb = [];
    let Bb = null;

    function eb(bb, ab) {
      try {
        bb(ab)
      } catch (Ub) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", Ub)
      }
    }

    function vb() {
      return Bb
    }

    function Lb(bb) {
      Yb.push(bb), null !== Bb && eb(bb, Bb)
    }

    function Pb(bb) {
      return Mb ??= Promise.all([Ub.e(69), Ub.e(94), Ub.e(214), Ub.e(74), Ub.e(215), Ub.e(189), Ub.e(93), Ub.e(259), Ub.e(187), Ub.e(262), Ub.e(199), Ub.e(186), Ub.e(200), Ub.e(136), Ub.e(85), Ub.e(114), Ub.e(237), Ub.e(53)]).then((() => Ub(41666))).then((ab => {
        ab.loadAudio(bb), Bb = ab;
        for (const bb of Yb) eb(bb, ab);
        return ab
      })).catch((bb => {
        throw Mb = null, bb
      })), Mb
    }
    async function Xb(bb, ab) {
      try {
        const Ub = await Pb(bb);
        await Ub.loadClientGame(ab)
      } catch (Ub) {
        throw new Ab(Ub)
      }
    }

    function jb(bb, ab) {
      Tb = {
        running: bb,
        shell: ab
      }
    }

    function Rb() {
      return Eb
    }
    async function kb(bb) {
      const ab = Tb;
      if ((null === ab || void 0 === ab ? void 0 : ab.running) !== bb) throw new Error("the core's session has ended");
      const Ub = await Pb(ab.shell.audio).catch((bb => {
        throw new Ab(bb)
      }));
      if (null !== Eb) return Eb;
      if (Tb !== ab || bb.isStopped) throw new Error("the core stopped while the game code loaded");
      if (Eb = Ub.startGameHost(bb, ab.shell), null === Eb) throw new Error("the core's shared tables didn't read, so the game can't start");
      return Eb
    }

    function yb() {
      null !== Eb && (null !== Bb ? Bb.endGameHost(Eb) : Eb.closeGame()), Eb = null, Tb = null
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);