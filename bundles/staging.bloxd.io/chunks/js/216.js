export const id = 216;
export const ids = [216];
export const modules = {
  39213: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb,
      f: () => Wb
    });
    const kb = "The world isn't loaded, so no blocks can be seen.",
      Wb = "The world isn't loaded, so nothing in it can be seen."
  },
  36388: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => ab,
      g: () => Wb
    });
    let kb = () => null;

    function Wb(bb) {
      kb = bb
    }

    function ab(bb, cb) {
      return kb(bb, cb)
    }
  },
  40026: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => lb,
      f: () => Nb,
      h: () => Cb,
      j: () => Qb
    });
    var kb = sb(26),
      Wb = sb(40035),
      ab = sb(40014),
      Tb = sb(40043),
      Ub = sb(40020),
      Ib = sb(40047),
      Hb = sb(40066);

    function fb(bb) {
      var cb, sb;
      const kb = (0, ab.h)();
      return kb ? null === (cb = (0, Wb.e)(kb.api, bb[0], bb[1], bb[2])) || void 0 === cb || null === (sb = cb.persisted) || void 0 === sb ? void 0 : sb.shared : void 0
    }

    function Mb(bb) {
      return `${bb[0]},${bb[1]},${bb[2]}`
    }
    const Xb = new Map;
    let nb = null,
      mb = 0;

    function lb() {
      return mb
    }

    function Qb(bb) {
      const cb = null !== nb && nb.key === Mb(bb.pos) ? nb.type : null;
      if (null === cb) return bb;
      let sb = null;
      if ("Iron" === cb) {
        const {
          cachedPasskey: cb,
          ...kb
        } = eb(bb.pos);
        sb = {
          OH: null !== cb && void 0 !== cb ? cb : [0, 0, 0, 0],
          ...kb
        }
      }
      return {
        ...bb,
        type: cb,
        ironChest: sb
      }
    }

    function eb(bb) {
      const cb = fb(bb),
        sb = null === cb || void 0 === cb ? void 0 : cb.ownerDbId,
        kb = function(bb) {
          var cb;
          let sb = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : fb(bb);
          const kb = Mb(bb),
            Wb = Xb.get(kb);
          return Wb ? Wb.lastOpened < (null !== (cb = null === sb || void 0 === sb ? void 0 : sb.passkeyLastUpdated) && void 0 !== cb ? cb : 0) ? (Xb.delete(kb), null) : [...Wb.OH] : null
        }(bb, cb);
      return void 0 === sb ? {
        cachedPasskey: kb
      } : {
        ownerDbId: sb,
        cachedPasskey: kb
      }
    }(0, Hb.k)(Tb.e, (bb => {
      const cb = (0, Ib.g)(Tb.e, bb);
      if (!(0, Ib.c)(cb) || cb.mT) return;
      if (mb++, !cb.HT || null === cb.XT) return void(nb = null);
      const sb = Mb(cb.XT);
      nb = {
        key: sb,
        type: cb.MT
      }, null !== cb.nT && Xb.set(sb, {
        OH: [...cb.nT],
        lastOpened: Date.now()
      })
    })), (0, Hb.g)((() => {
      Xb.clear(), nb = null, mb++
    })), (0, Hb.j)((() => {
      null !== nb && (nb = null, mb++, kb.j.QQ("chestToggleFromServer", !1, !0))
    }));
    const Cb = {
        boardEditRequested: {
          watch: bb => (0, kb.l)("EditBoard", (cb => {
            let {
              pos: sb
            } = cb;
            if (null === sb) return void bb(null);
            const kb = (0, ab.h)(),
              Wb = (0, ab.s)();
            kb && Wb && bb(Wb.readBoardToEdit(kb.api, kb.chunks, sb))
          }))
        },
        ironChestOpenRequested: {
          watch: bb => (0, kb.l)("OpenIronChest", (cb => {
            let {
              pos: sb
            } = cb;
            bb(function(bb) {
              return {
                pos: bb,
                ...eb(bb)
              }
            }(sb))
          }))
        }
      },
      Nb = {
        writeOnBoard(bb) {
          var cb;
          let {
            pos: sb,
            text: kb,
            textSize: Wb
          } = bb;
          null === (cb = (0, ab.h)()) || void 0 === cb || cb.send(Ub.c.UpdateBoard, (0, Ub.X)({
            iT: sb,
            OT: kb,
            GT: Wb
          }))
        },
        writeBook(bb) {
          var cb;
          let {
            pages: sb,
            title: kb,
            published: Wb
          } = bb;
          null === (cb = (0, ab.h)()) || void 0 === cb || cb.send(Ub.c.UpdateBook, (0, Ub.Z)({
            GU: sb,
            KU: kb,
            ZU: Wb
          }))
        },
        writeNameTag(bb) {
          var cb;
          null === (cb = (0, ab.h)()) || void 0 === cb || cb.send(Ub.c.UpdateNameTag, bb)
        },
        setCustomLobbyBlock(bb) {
          let {
            pos: cb,
            blockName: sb
          } = bb;
          const kb = (0, ab.s)(),
            Wb = (0, ab.h)();
          kb && Wb && Wb.send(Ub.c.SetCustomLobbyBlock, (0, Ub.J)({
            Jf: kb.blockIdOf(sb),
            hf: cb
          }))
        }
      }
  },
  40083: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => Ib,
      i: () => Tb,
      l: () => Ub
    });
    var kb = sb(40002),
      Wb = sb(4498),
      ab = sb(40014);

    function Tb() {
      var bb;
      const cb = null === (bb = (0, ab.h)()) || void 0 === bb ? void 0 : bb.api.localId;
      return void 0 === cb || cb === kb.ad ? null : String(cb)
    }

    function Ub(bb) {
      const cb = (0, ab.h)();
      if (null !== cb) return bb(cb);
      let sb = null;
      const kb = (0, Wb.y)((() => {
        const cb = (0, ab.h)();
        null !== cb && null === sb && (kb(), sb = bb(cb))
      }));
      return () => {
        var bb;
        kb(), null === (bb = sb) || void 0 === bb || bb()
      }
    }

    function Ib(bb, cb, sb) {
      return {
        current: () => {
          const sb = (0, ab.h)();
          return null === sb ? cb : bb(sb)()
        },
        watch: cb => Ub((kb => {
          const Wb = bb(kb);
          let ab = Wb();
          return cb(ab), sb((() => {
            const bb = Wb();
            bb !== ab && (ab = bb, cb(bb))
          }))
        }))
      }
    }
  },
  40076: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Hb
    });
    var kb = sb(40014),
      Wb = sb(40083),
      ab = sb(40090);

    function Tb() {
      var bb, cb;
      return null !== (bb = null === (cb = (0, kb.h)()) || void 0 === cb ? void 0 : cb.itemBridgeSources) && void 0 !== bb ? bb : ab.b
    }

    function Ub(bb) {
      return {
        current: () => Tb().states[bb].current(),
        watch: cb => (0, Wb.l)((sb => {
          const kb = sb.itemBridgeSources.states[bb];
          return cb(kb.current()), kb.watch(cb)
        }))
      }
    }

    function Ib(bb) {
      return {
        watch: cb => (0, Wb.l)((sb => sb.itemBridgeSources.events[bb].watch(cb)))
      }
    }
    const Hb = {
      states: {
        inventory: Ub("inventory"),
        hotbar: Ub("hotbar"),
        crafting: Ub("crafting"),
        heldItemAim: Ub("heldItemAim")
      },
      events: {
        hotbarSlotRequested: Ib("hotbarSlotRequested"),
        hotbarScrolled: Ib("hotbarScrolled"),
        numberKeyPressed: Ib("numberKeyPressed"),
        inventoryDropRequested: Ib("inventoryDropRequested"),
        chestToggled: Ib("chestToggled"),
        chestRefreshed: Ib("chestRefreshed"),
        inventorySynced: Ib("inventorySynced"),
        enchantingTableOpened: Ib("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: bb => Tb().commands.selectHotbarSlot(bb),
        removeInventoryItem: bb => Tb().commands.removeInventoryItem(bb),
        swapInventorySlots: bb => Tb().commands.swapInventorySlots(bb),
        moveInventoryItem: bb => Tb().commands.moveInventoryItem(bb),
        quickMoveInventoryItem: bb => Tb().commands.quickMoveInventoryItem(bb),
        closeChest: bb => Tb().commands.closeChest(bb),
        focusCrafting: bb => Tb().commands.focusCrafting(bb),
        craftRecipe: bb => Tb().commands.craftRecipe(bb),
        salvageItem: bb => Tb().commands.salvageItem(bb),
        enchantItem: bb => Tb().commands.enchantItem(bb)
      },
      queries: {
        enchantingOffer: bb => Tb().queries.enchantingOffer(bb)
      }
    }
  },
  40090: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => Ub
    });
    var kb = sb(39213);

    function Wb(bb) {
      return {
        current: () => bb,
        watch: () => () => {}
      }
    }

    function ab() {}
    const Tb = Object.freeze([0, 0, 0]),
      Ub = {
        states: {
          health: Wb({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Wb({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Wb({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Wb({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Wb({}),
          creativeVisibility: Wb({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Wb(null),
          heldItemAim: Wb({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Wb(!1),
          gliderBoostFuel: Wb(0),
          flight: Wb({
            canFly: !1,
            flying: !1
          }),
          crafting: Wb({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Wb({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Wb({}),
          fullInventory: Wb(!1),
          crosshairTarget: Wb({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Wb(!0),
          freeCamera: Wb({
            allowed: !1,
            movesFly: !1
          }),
          replay: Wb(null),
          replayEdits: Wb(null),
          replayRecorder: Wb({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: Wb(!1)
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
          selectHotbarSlot: ab,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: ab,
          setInventoryOpen: ab,
          changeIronChestPasskey: ab,
          dragReplayCamera: ab,
          applyTemporaryThirdPerson: ab,
          holdEmoteWheel: ab,
          recordFlyingMiddleText: ab,
          focusCrafting: ab,
          craftRecipe: () => ({
            tf: 0,
            TM: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: ab,
          setShopOpen: ab,
          buyShopItem: ab,
          sendChatMessage: ab,
          ignorePlayer: ab,
          reportPlayer: ab,
          reportWorldCodeChat: ab,
          requestDiscordReportKey: ab,
          reportLobbyOrGame: ab,
          playEmote: ab,
          updateMyCosmetic: ab,
          writeOnBoard: ab,
          writeBook: ab,
          writeNameTag: ab,
          setCustomLobbyBlock: ab,
          openIronChest: ab,
          sendCodeCollab: ab,
          clickCodeBlock: ab,
          bindCustomButtonKeys: ab,
          pressCustomButton: ab,
          moveReplayFreecam: ab,
          holdReplayFreecamVertical: ab,
          respawn: ab,
          wakeUp: ab,
          requestLeaderboard: ab,
          completeTask: ab,
          setServerCookie: ab,
          answerUiRequest: ab,
          chooseRewardedAd: ab,
          setCameraZoom: ab,
          setFreeCameraMovesFly: ab,
          setBlockHighlight: ab,
          setCrosshairInteractPrompt: ab,
          setLookSensitivity: ab,
          replayAction: ab,
          setReplayPlaying: ab,
          seekReplay: ab,
          setReplayCameraMode: ab,
          syncReplayCameraMode: ab,
          setReplayCameraKeyframe: ab,
          moveReplayCameraKeyframe: ab,
          deleteReplayCameraKeyframes: ab,
          setReplayPlaybackMark: ab,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: ab,
          exportReplayVideo: ab,
          toggleRecording: ab,
          saveClip: ab,
          setRecorderPrefs: ab,
          setReplayViewerOpen: ab
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => kb.e,
          worldCodeAiGameState: () => kb.f
        },
        lookups: {
          localPos: () => Tb,
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
  40005: (bb, cb, sb) => {
    sb.d(cb, {
      c: () => Jb,
      f: () => hb,
      j: () => gb,
      l: () => Yb,
      o: () => Lb
    });
    var kb = sb(38801),
      Wb = sb(1235),
      ab = sb(1895),
      Tb = sb(1907),
      Ub = sb(3050),
      Ib = sb(36388),
      Hb = sb(1312),
      fb = sb(40014),
      Mb = sb(4536),
      Xb = sb(2305),
      nb = sb(40020),
      mb = sb(40026),
      lb = sb(40076);
    let Qb = null;

    function eb(bb) {
      const cb = new Map,
        sb = sb => {
          if ("string" !== typeof sb) return;
          let kb = cb.get(sb);
          return void 0 === kb && (kb = bb(sb), void 0 !== kb && cb.set(sb, kb)), kb
        };
      return new Proxy({}, {
        get: (bb, cb) => sb(cb),
        has: (bb, cb) => void 0 !== sb(cb)
      })
    }

    function Cb(bb) {
      const cb = (0, Ub.b)(bb);
      return void 0 !== cb && (0, Ub.f)(cb) === bb
    }

    function Nb(bb) {
      var cb;
      const sb = null === (cb = (0, fb.h)()) || void 0 === cb ? void 0 : cb.tables;
      if (void 0 === sb || !Cb(bb)) return;
      const kb = {
          displayName: sb.getDisplayName(bb)
        },
        Wb = sb.getItemStat(bb, "description");
      void 0 !== Wb && null !== Wb && (kb.description = Wb);
      const {
        rootName: ab
      } = sb.getMetaInfo(bb);
      ab !== bb && (kb.rootName = ab);
      const Tb = sb.getItemStat(bb, "armourReduction");
      return void 0 !== Tb && null !== Tb && (kb.armourReduction = Tb), kb
    }(0, fb.w)((bb => {
      Qb = bb
    }));
    const Vb = (0, Tb.g)("DisplayName", "Description");

    function Lb() {
      return Boolean(ab.e.get("useInventory") && ab.e.get("useFullInventory"))
    }
    let ub = null;
    const Yb = {
        inventory: function() {
          const bb = lb.c.states.inventory;
          let cb = null;
          const sb = bb => {
            var sb;
            return null === bb.chest ? bb : ((null === (sb = cb) || void 0 === sb ? void 0 : sb.from) === bb && cb.chestVersion === (0, mb.e)() || (cb = {
              from: bb,
              chestVersion: (0, mb.e)(),
              view: {
                ...bb,
                chest: (0, mb.j)(bb.chest)
              }
            }), cb.view)
          };
          return {
            current: () => sb(bb.current()),
            watch: cb => bb.watch((bb => {
              cb(sb(bb))
            }))
          }
        }(),
        crafting: lb.c.states.crafting,
        stationItems: {
          current() {
            var bb;
            return (null === (bb = ub) || void 0 === bb ? void 0 : bb.namesVersion) !== (0, Ub.h)() && (ub = {
              namesVersion: (0, Ub.h)(),
              items: {
                enchantable: eb((bb => {
                  const cb = (0, Ub.b)(bb);
                  return void 0 !== cb && null !== Qb && Qb.enchantmentPerksOf(cb).length > 0 || void 0
                })),
                salvageable: eb((bb => !(!Cb(bb) || null === (0, Ib.e)(bb)) || void 0))
              }
            }), ub.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let bb = null;
          const cb = () => {
            var cb;
            return (null === (cb = bb) || void 0 === cb ? void 0 : cb.namesVersion) !== (0, Ub.h)() && (bb = {
              namesVersion: (0, Ub.h)(),
              infos: eb(Nb)
            }), bb.infos
          };
          return {
            current: cb,
            watch: sb => (0, Tb.p)((kb => {
              kb.some(Vb) && (bb = null, sb(cb()))
            }))
          }
        }(),
        creativeVisibility: (0, Tb.k)((function() {
          const bb = {};
          for (const Wb of null !== (cb = null === (sb = Qb) || void 0 === sb ? void 0 : sb.creativeItemIds()) && void 0 !== cb ? cb : []) {
            var cb, sb, Tb, Ib;
            const Hb = (0, Ub.f)(Wb);
            if (void 0 === Hb) continue;
            const fb = null !== (Tb = ab.e.get((0, kb.f)(Hb, "showInCreativeInven"))) && void 0 !== Tb ? Tb : null === (Ib = Qb) || void 0 === Ib ? void 0 : Ib.showInCreativeInvenOf(Wb);
            "boolean" === typeof fb && (bb[Hb] = fb)
          }
          return {
            publicLobby: (0, Wb.F)((0, Hb.d)().lobbyName),
            shownInGame: bb
          }
        }), ["connectedGameChanged"], (0, Tb.g)("ShowInCreativeInven")),
        fullInventory: (0, Tb.k)(Lb, [], (0, Tb.j)("useInventory", "useFullInventory"))
      },
      hb = {
        inventoryDropRequested: lb.c.events.inventoryDropRequested,
        chestToggled: lb.c.events.chestToggled,
        chestRefreshed: lb.c.events.chestRefreshed,
        inventorySynced: lb.c.events.inventorySynced,
        enchantingTableOpened: lb.c.events.enchantingTableOpened
      },
      Jb = {
        removeInventoryItem: lb.c.commands.removeInventoryItem,
        swapInventorySlots: lb.c.commands.swapInventorySlots,
        moveInventoryItem: lb.c.commands.moveInventoryItem,
        quickMoveInventoryItem: lb.c.commands.quickMoveInventoryItem,
        closeChest: lb.c.commands.closeChest,
        setInventoryOpen(bb) {
          (0, Mb.d)(Xb.z.InventoryOpen, bb ? Xb.z.InventoryOpen : 0)
        },
        focusCrafting: lb.c.commands.focusCrafting,
        craftRecipe: lb.c.commands.craftRecipe,
        salvageItem: lb.c.commands.salvageItem,
        enchantItem: lb.c.commands.enchantItem,
        changeIronChestPasskey(bb) {
          var cb;
          let {
            pos: sb,
            OH: kb
          } = bb;
          null === (cb = (0, fb.h)()) || void 0 === cb || cb.send(nb.c.ChangeIronChestPasskey, (0, nb.i)({
            XT: sb,
            OH: kb
          }))
        },
        openIronChest(bb) {
          var cb;
          let {
            pos: sb,
            OH: kb
          } = bb;
          null === (cb = (0, fb.h)()) || void 0 === cb || cb.send(nb.c.OpenIronChest, (0, nb.B)({
            XT: sb,
            OH: kb
          }))
        }
      },
      gb = {
        enchantingOffer: lb.c.queries.enchantingOffer
      }
  },
  40070: (bb, cb, sb) => {
    sb.d(cb, {
      e: () => kb,
      g: () => Mb,
      i: () => Ub,
      l: () => ab,
      p: () => Wb,
      t: () => Ib,
      u: () => fb
    });
    class kb extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Wb(bb) {
      return bb instanceof RangeError && /call stack/i.test(bb.message) || bb instanceof Error && "InternalError" === bb.name && /recursion/i.test(bb.message)
    }

    function ab(bb) {
      return /out of (executable )?memory|could not allocate memory|array buffer allocation failed/i.test(String(bb))
    }
    const Tb = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function Ub(bb) {
      var cb;
      return bb instanceof WebAssembly.RuntimeError || bb instanceof kb || Wb(bb) && Tb.test(null !== (cb = bb.stack) && void 0 !== cb ? cb : "")
    }

    function Ib(bb, cb) {
      if (Ub(bb)) throw bb;
      console.error(cb, bb)
    }

    function Hb(bb, cb, sb, Wb, ab) {
      if (cb % Wb !== 0 || cb + sb > bb.byteLength) throw new kb(`${ab}: ${sb} bytes at ${cb}, ${Wb}-aligned, outside ${bb.byteLength} bytes of memory`)
    }

    function fb(bb, cb, sb, kb, Wb) {
      return 0 === sb ? null : (Hb(cb, sb, kb * bb.BYTES_PER_ELEMENT, bb.BYTES_PER_ELEMENT, Wb), new bb(cb, sb, kb))
    }

    function Mb(bb, cb, sb, kb, Wb) {
      return 0 === cb ? null : (Hb(bb, cb, sb, kb, Wb), new DataView(bb, cb, sb))
    }
  },
  40014: (bb, cb, sb) => {
    sb.d(cb, {
      b: () => kb,
      e: () => eb,
      h: () => lb,
      l: () => Qb,
      p: () => Xb,
      q: () => nb,
      s: () => fb,
      w: () => Mb,
      y: () => mb
    });
    class kb extends Error {
      constructor(bb) {
        super(`the join's code did not load: ${bb instanceof Error?bb.message:String(bb)}`, {
          cause: bb
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === bb || void 0 === bb ? void 0 : bb.request
      }
    }
    let Wb = null,
      ab = null,
      Tb = null;
    const Ub = [];
    let Ib = null;

    function Hb(bb, cb) {
      try {
        bb(cb)
      } catch (sb) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", sb)
      }
    }

    function fb() {
      return Ib
    }

    function Mb(bb) {
      Ub.push(bb), null !== Ib && Hb(bb, Ib)
    }

    function Xb(bb) {
      return Wb ??= Promise.all([sb.e(69), sb.e(94), sb.e(214), sb.e(74), sb.e(215), sb.e(189), sb.e(93), sb.e(259), sb.e(187), sb.e(262), sb.e(199), sb.e(186), sb.e(200), sb.e(136), sb.e(85), sb.e(114), sb.e(237), sb.e(53)]).then((() => sb(41933))).then((cb => {
        cb.loadAudio(bb), Ib = cb;
        for (const bb of Ub) Hb(bb, cb);
        return cb
      })).catch((bb => {
        throw Wb = null, bb
      })), Wb
    }
    async function nb(bb, cb) {
      try {
        const sb = await Xb(bb);
        await sb.loadClientGame(cb)
      } catch (sb) {
        throw new kb(sb)
      }
    }

    function mb(bb, cb) {
      ab = {
        running: bb,
        shell: cb
      }
    }

    function lb() {
      return Tb
    }
    async function Qb(bb) {
      const cb = ab;
      if ((null === cb || void 0 === cb ? void 0 : cb.running) !== bb) throw new Error("the core's session has ended");
      const sb = await Xb(cb.shell.audio).catch((bb => {
        throw new kb(bb)
      }));
      if (null !== Tb) return Tb;
      if (ab !== cb || bb.isStopped) throw new Error("the core stopped while the game code loaded");
      if (Tb = sb.startGameHost(bb, cb.shell), null === Tb) throw new Error("the core's shared tables didn't read, so the game can't start");
      return Tb
    }

    function eb() {
      null !== Tb && (null !== Ib ? Ib.endGameHost(Tb) : Tb.closeGame()), Tb = null, ab = null
    }
  }
};
Object.freeze(modules);
for (const bb in modules) Object.freeze(modules[bb]);