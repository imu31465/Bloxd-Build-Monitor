export const id = 228;
export const ids = [228];
export const modules = {
  39850: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => Ot,
      h: () => qt
    });
    const Ot = "The world isn't loaded, so no blocks can be seen.",
      qt = "The world isn't loaded, so nothing in it can be seen."
  },
  39316: (tt, et, Vt) => {
    function Ot(tt) {
      return !(!tt.lobbyLeaderboardInfo && !tt.lobbyManage)
    }
    Vt.d(et, {
      d: () => Ot
    })
  },
  37044: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Dt,
      h: () => qt
    });
    let Ot = () => null;

    function qt(tt) {
      Ot = tt
    }

    function Dt(tt, et) {
      return Ot(tt, et)
    }
  },
  40785: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => wt,
      i: () => bt,
      m: () => Mt,
      p: () => yt
    });
    var Ot = Vt(31),
      qt = Vt(40792),
      Dt = Vt(40769),
      mt = Vt(40797),
      dt = Vt(40777),
      jt = Vt(40804),
      Ht = Vt(40824);

    function Xt(tt) {
      var et, Vt;
      const Ot = (0, Dt.g)();
      return Ot ? null === (et = (0, qt.d)(Ot.api, tt[0], tt[1], tt[2])) || void 0 === et || null === (Vt = et.persisted) || void 0 === Vt ? void 0 : Vt.shared : void 0
    }

    function Qt(tt) {
      return `${tt[0]},${tt[1]},${tt[2]}`
    }
    const lt = new Map;
    let Et = null,
      ft = 0;

    function wt() {
      return ft
    }

    function yt(tt) {
      const et = null !== Et && Et.key === Qt(tt.pos) ? Et.type : null;
      if (null === et) return tt;
      let Vt = null;
      if ("Iron" === et) {
        const {
          cachedPasskey: et,
          ...Ot
        } = Nt(tt.pos);
        Vt = {
          Rd: null !== et && void 0 !== et ? et : [0, 0, 0, 0],
          ...Ot
        }
      }
      return {
        ...tt,
        type: et,
        ironChest: Vt
      }
    }

    function Nt(tt) {
      const et = Xt(tt),
        Vt = null === et || void 0 === et ? void 0 : et.ownerDbId,
        Ot = function(tt) {
          var et;
          let Vt = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Xt(tt);
          const Ot = Qt(tt),
            qt = lt.get(Ot);
          return qt ? qt.lastOpened < (null !== (et = null === Vt || void 0 === Vt ? void 0 : Vt.passkeyLastUpdated) && void 0 !== et ? et : 0) ? (lt.delete(Ot), null) : [...qt.Rd] : null
        }(tt, et);
      return void 0 === Vt ? {
        cachedPasskey: Ot
      } : {
        ownerDbId: Vt,
        cachedPasskey: Ot
      }
    }(0, Ht.j)(mt.d, (tt => {
      const et = (0, jt.h)(mt.d, tt);
      if (!(0, jt.d)(et) || et.tD) return;
      if (ft++, !et.Bq || null === et.Tq) return void(Et = null);
      const Vt = Qt(et.Tq);
      Et = {
        key: Vt,
        type: et.xq
      }, null !== et.nq && lt.set(Vt, {
        Rd: [...et.nq],
        lastOpened: Date.now()
      })
    })), (0, Ht.f)((() => {
      lt.clear(), Et = null, ft++
    })), (0, Ht.g)((() => {
      null !== Et && (Et = null, ft++, Ot.j.sw("chestToggleFromServer", !1, !0))
    }));
    const Mt = {
        boardEditRequested: {
          watch: tt => (0, Ot.n)("EditBoard", (et => {
            let {
              pos: Vt
            } = et;
            if (null === Vt) return void tt(null);
            const Ot = (0, Dt.g)(),
              qt = (0, Dt.q)();
            Ot && qt && tt(qt.readBoardToEdit(Ot.api, Ot.chunks, Vt))
          }))
        },
        ironChestOpenRequested: {
          watch: tt => (0, Ot.n)("OpenIronChest", (et => {
            let {
              pos: Vt
            } = et;
            tt(function(tt) {
              return {
                pos: tt,
                ...Nt(tt)
              }
            }(Vt))
          }))
        }
      },
      bt = {
        writeOnBoard(tt) {
          var et;
          let {
            pos: Vt,
            text: Ot,
            textSize: qt
          } = tt;
          null === (et = (0, Dt.g)()) || void 0 === et || et.send(dt.c.UpdateBoard, (0, dt.S)({
            Rj: Vt,
            Ij: Ot,
            Pj: qt
          }))
        },
        writeBook(tt) {
          var et;
          let {
            pages: Vt,
            title: Ot,
            published: qt
          } = tt;
          null === (et = (0, Dt.g)()) || void 0 === et || et.send(dt.c.UpdateBook, (0, dt.T)({
            nm: Vt,
            td: Ot,
            Vd: qt
          }))
        },
        writeNameTag(tt) {
          var et;
          null === (et = (0, Dt.g)()) || void 0 === et || et.send(dt.c.UpdateNameTag, tt)
        },
        setCustomLobbyBlock(tt) {
          let {
            pos: et,
            blockName: Vt
          } = tt;
          const Ot = (0, Dt.q)(),
            qt = (0, Dt.g)();
          Ot && qt && qt.send(dt.c.SetCustomLobbyBlock, (0, dt.I)({
            qd: Ot.blockIdOf(Vt),
            Od: et
          }))
        }
      }
  },
  40845: (tt, et, Vt) => {
    Vt.d(et, {
      b: () => jt,
      c: () => mt,
      d: () => dt
    });
    var Ot = Vt(40761),
      qt = Vt(4951),
      Dt = Vt(40769);

    function mt() {
      var tt;
      const et = null === (tt = (0, Dt.g)()) || void 0 === tt ? void 0 : tt.api.localId;
      return void 0 === et || et === Ot.hd ? null : String(et)
    }

    function dt(tt) {
      const et = (0, Dt.g)();
      if (null !== et) return tt(et);
      let Vt = null;
      const Ot = (0, qt.o)((() => {
        const et = (0, Dt.g)();
        null !== et && null === Vt && (Ot(), Vt = tt(et))
      }));
      return () => {
        var tt;
        Ot(), null === (tt = Vt) || void 0 === tt || tt()
      }
    }

    function jt(tt, et, Vt) {
      return {
        current: () => {
          const Vt = (0, Dt.g)();
          return null === Vt ? et : tt(Vt)()
        },
        watch: et => dt((Ot => {
          const qt = tt(Ot);
          let Dt = qt();
          return et(Dt), Vt((() => {
            const tt = qt();
            tt !== Dt && (Dt = tt, et(tt))
          }))
        }))
      }
    }
  },
  40840: (tt, et, Vt) => {
    Vt.d(et, {
      c: () => Ht
    });
    var Ot = Vt(40769),
      qt = Vt(40845),
      Dt = Vt(40853);

    function mt() {
      var tt, et;
      return null !== (tt = null === (et = (0, Ot.g)()) || void 0 === et ? void 0 : et.itemBridgeSources) && void 0 !== tt ? tt : Dt.e
    }

    function dt(tt) {
      return {
        current: () => mt().states[tt].current(),
        watch: et => (0, qt.d)((Vt => {
          const Ot = Vt.itemBridgeSources.states[tt];
          return et(Ot.current()), Ot.watch(et)
        }))
      }
    }

    function jt(tt) {
      return {
        watch: et => (0, qt.d)((Vt => Vt.itemBridgeSources.events[tt].watch(et)))
      }
    }
    const Ht = {
      states: {
        inventory: dt("inventory"),
        hotbar: dt("hotbar"),
        crafting: dt("crafting"),
        heldItemAim: dt("heldItemAim")
      },
      events: {
        hotbarSlotRequested: jt("hotbarSlotRequested"),
        hotbarScrolled: jt("hotbarScrolled"),
        numberKeyPressed: jt("numberKeyPressed"),
        inventoryDropRequested: jt("inventoryDropRequested"),
        chestToggled: jt("chestToggled"),
        chestRefreshed: jt("chestRefreshed"),
        inventorySynced: jt("inventorySynced"),
        enchantingTableOpened: jt("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: tt => mt().commands.selectHotbarSlot(tt),
        removeInventoryItem: tt => mt().commands.removeInventoryItem(tt),
        swapInventorySlots: tt => mt().commands.swapInventorySlots(tt),
        moveInventoryItem: tt => mt().commands.moveInventoryItem(tt),
        quickMoveInventoryItem: tt => mt().commands.quickMoveInventoryItem(tt),
        closeChest: tt => mt().commands.closeChest(tt),
        focusCrafting: tt => mt().commands.focusCrafting(tt),
        craftRecipe: tt => mt().commands.craftRecipe(tt),
        salvageItem: tt => mt().commands.salvageItem(tt),
        enchantItem: tt => mt().commands.enchantItem(tt)
      },
      queries: {
        enchantingOffer: tt => mt().queries.enchantingOffer(tt)
      }
    }
  },
  40853: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => dt
    });
    var Ot = Vt(39850);

    function qt(tt) {
      return {
        current: () => tt,
        watch: () => () => {}
      }
    }

    function Dt() {}
    const mt = Object.freeze([0, 0, 0]),
      dt = {
        states: {
          health: qt({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: qt({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: qt({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: qt({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: qt({}),
          creativeVisibility: qt({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: qt(null),
          heldItemAim: qt({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: qt(!1),
          gliderBoostFuel: qt(0),
          flight: qt({
            canFly: !1,
            flying: !1
          }),
          crafting: qt({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: qt({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: qt({}),
          fullInventory: qt(!1),
          crosshairTarget: qt({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: qt(!0),
          freeCamera: qt({
            allowed: !1,
            movesFly: !1
          }),
          replay: qt(null),
          replayEdits: qt(null),
          replayRecorder: qt({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: qt(!1)
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
          selectHotbarSlot: Dt,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Dt,
          setInventoryOpen: Dt,
          changeIronChestPasskey: Dt,
          dragReplayCamera: Dt,
          applyTemporaryThirdPerson: Dt,
          holdEmoteWheel: Dt,
          recordFlyingMiddleText: Dt,
          focusCrafting: Dt,
          craftRecipe: () => ({
            cX: 0,
            jj: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Dt,
          setShopOpen: Dt,
          buyShopItem: Dt,
          lobbyManage: Dt,
          sendChatMessage: Dt,
          ignorePlayer: Dt,
          reportPlayer: Dt,
          reportWorldCodeChat: Dt,
          requestDiscordReportKey: Dt,
          reportLobbyOrGame: Dt,
          playEmote: Dt,
          updateMyCosmetic: Dt,
          writeOnBoard: Dt,
          writeBook: Dt,
          writeNameTag: Dt,
          setCustomLobbyBlock: Dt,
          openIronChest: Dt,
          sendCodeCollab: Dt,
          clickCodeBlock: Dt,
          bindCustomButtonKeys: Dt,
          pressCustomButton: Dt,
          moveReplayFreecam: Dt,
          holdReplayFreecamVertical: Dt,
          respawn: Dt,
          wakeUp: Dt,
          requestLeaderboard: Dt,
          completeTask: Dt,
          setServerCookie: Dt,
          answerUiRequest: Dt,
          chooseRewardedAd: Dt,
          setCameraZoom: Dt,
          setFreeCameraMovesFly: Dt,
          setBlockHighlight: Dt,
          setCrosshairInteractPrompt: Dt,
          setLookSensitivity: Dt,
          replayAction: Dt,
          setReplayPlaying: Dt,
          seekReplay: Dt,
          setReplayCameraMode: Dt,
          syncReplayCameraMode: Dt,
          setReplayCameraKeyframe: Dt,
          moveReplayCameraKeyframe: Dt,
          deleteReplayCameraKeyframes: Dt,
          setReplayPlaybackMark: Dt,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Dt,
          exportReplayVideo: Dt,
          toggleRecording: Dt,
          saveClip: Dt,
          setRecorderPrefs: Dt,
          setReplayViewerOpen: Dt
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Ot.e,
          worldCodeAiGameState: () => Ot.h
        },
        lookups: {
          localPos: () => mt,
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
  40767: (tt, et, Vt) => {
    Vt.d(et, {
      e: () => vt,
      f: () => ht,
      h: () => Wt,
      k: () => Kt,
      n: () => Ct
    });
    var Ot = Vt(39441),
      qt = Vt(1308),
      Dt = Vt(2043),
      mt = Vt(2054),
      dt = Vt(3346),
      jt = Vt(37044),
      Ht = Vt(1423),
      Xt = Vt(40769),
      Qt = Vt(4980),
      lt = Vt(2458),
      Et = Vt(40777),
      ft = Vt(40785),
      wt = Vt(40840);
    let yt = null;

    function Nt(tt) {
      const et = new Map,
        Vt = Vt => {
          if ("string" !== typeof Vt) return;
          let Ot = et.get(Vt);
          return void 0 === Ot && (Ot = tt(Vt), void 0 !== Ot && et.set(Vt, Ot)), Ot
        };
      return new Proxy({}, {
        get: (tt, et) => Vt(et),
        has: (tt, et) => void 0 !== Vt(et)
      })
    }

    function Mt(tt) {
      const et = (0, dt.b)(tt);
      return void 0 !== et && (0, dt.e)(et) === tt
    }

    function bt(tt) {
      var et;
      const Vt = null === (et = (0, Xt.g)()) || void 0 === et ? void 0 : et.tables;
      if (void 0 === Vt || !Mt(tt)) return;
      const Ot = {
          displayName: Vt.getDisplayName(tt)
        },
        qt = Vt.getItemStat(tt, "description");
      void 0 !== qt && null !== qt && (Ot.description = qt);
      const {
        rootName: Dt
      } = Vt.getMetaInfo(tt);
      Dt !== tt && (Ot.rootName = Dt);
      const mt = Vt.getItemStat(tt, "armourReduction");
      return void 0 !== mt && null !== mt && (Ot.armourReduction = mt), Ot
    }(0, Xt.r)((tt => {
      yt = tt
    }));
    const Jt = (0, mt.g)("DisplayName", "Description");

    function Ct() {
      return Boolean(Dt.b.get("useInventory") && Dt.b.get("useFullInventory"))
    }
    let ut = null;
    const Kt = {
        inventory: function() {
          const tt = wt.c.states.inventory;
          let et = null;
          const Vt = tt => {
            var Vt;
            return null === tt.chest ? tt : ((null === (Vt = et) || void 0 === Vt ? void 0 : Vt.from) === tt && et.chestVersion === (0, ft.e)() || (et = {
              from: tt,
              chestVersion: (0, ft.e)(),
              view: {
                ...tt,
                chest: (0, ft.p)(tt.chest)
              }
            }), et.view)
          };
          return {
            current: () => Vt(tt.current()),
            watch: et => tt.watch((tt => {
              et(Vt(tt))
            }))
          }
        }(),
        crafting: wt.c.states.crafting,
        stationItems: {
          current() {
            var tt;
            return (null === (tt = ut) || void 0 === tt ? void 0 : tt.namesVersion) !== (0, dt.h)() && (ut = {
              namesVersion: (0, dt.h)(),
              items: {
                enchantable: Nt((tt => {
                  const et = (0, dt.b)(tt);
                  return void 0 !== et && null !== yt && yt.enchantmentPerksOf(et).length > 0 || void 0
                })),
                salvageable: Nt((tt => !(!Mt(tt) || null === (0, jt.d)(tt)) || void 0))
              }
            }), ut.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let tt = null;
          const et = () => {
            var et;
            return (null === (et = tt) || void 0 === et ? void 0 : et.namesVersion) !== (0, dt.h)() && (tt = {
              namesVersion: (0, dt.h)(),
              infos: Nt(bt)
            }), tt.infos
          };
          return {
            current: et,
            watch: Vt => (0, mt.q)((Ot => {
              Ot.some(Jt) && (tt = null, Vt(et()))
            }))
          }
        }(),
        creativeVisibility: (0, mt.l)((function() {
          const tt = {};
          for (const qt of null !== (et = null === (Vt = yt) || void 0 === Vt ? void 0 : Vt.creativeItemIds()) && void 0 !== et ? et : []) {
            var et, Vt, mt, jt;
            const Ht = (0, dt.e)(qt);
            if (void 0 === Ht) continue;
            const Xt = null !== (mt = Dt.b.get((0, Ot.h)(Ht, "showInCreativeInven"))) && void 0 !== mt ? mt : null === (jt = yt) || void 0 === jt ? void 0 : jt.showInCreativeInvenOf(qt);
            "boolean" === typeof Xt && (tt[Ht] = Xt)
          }
          return {
            publicLobby: (0, qt.P)((0, Ht.c)().lobbyName),
            shownInGame: tt
          }
        }), ["connectedGameChanged"], (0, mt.g)("ShowInCreativeInven")),
        fullInventory: (0, mt.l)(Ct, [], (0, mt.k)("useInventory", "useFullInventory"))
      },
      ht = {
        inventoryDropRequested: wt.c.events.inventoryDropRequested,
        chestToggled: wt.c.events.chestToggled,
        chestRefreshed: wt.c.events.chestRefreshed,
        inventorySynced: wt.c.events.inventorySynced,
        enchantingTableOpened: wt.c.events.enchantingTableOpened
      },
      vt = {
        removeInventoryItem: wt.c.commands.removeInventoryItem,
        swapInventorySlots: wt.c.commands.swapInventorySlots,
        moveInventoryItem: wt.c.commands.moveInventoryItem,
        quickMoveInventoryItem: wt.c.commands.quickMoveInventoryItem,
        closeChest: wt.c.commands.closeChest,
        setInventoryOpen(tt) {
          (0, Qt.g)(lt.u.InventoryOpen, tt ? lt.u.InventoryOpen : 0)
        },
        focusCrafting: wt.c.commands.focusCrafting,
        craftRecipe: wt.c.commands.craftRecipe,
        salvageItem: wt.c.commands.salvageItem,
        enchantItem: wt.c.commands.enchantItem,
        changeIronChestPasskey(tt) {
          var et;
          let {
            pos: Vt,
            Rd: Ot
          } = tt;
          null === (et = (0, Xt.g)()) || void 0 === et || et.send(Et.c.ChangeIronChestPasskey, (0, Et.j)({
            Tq: Vt,
            Rd: Ot
          }))
        },
        openIronChest(tt) {
          var et;
          let {
            pos: Vt,
            Rd: Ot
          } = tt;
          null === (et = (0, Xt.g)()) || void 0 === et || et.send(Et.c.OpenIronChest, (0, Et.z)({
            Tq: Vt,
            Rd: Ot
          }))
        }
      },
      Wt = {
        enchantingOffer: wt.c.queries.enchantingOffer
      }
  },
  40831: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot,
      e: () => Xt,
      h: () => mt,
      k: () => qt,
      n: () => dt,
      o: () => Ht
    });
    class Ot extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function qt(tt) {
      return tt instanceof RangeError && /call stack/i.test(tt.message) || tt instanceof Error && "InternalError" === tt.name && /recursion/i.test(tt.message)
    }
    const Dt = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function mt(tt) {
      var et;
      return tt instanceof WebAssembly.RuntimeError || tt instanceof Ot || qt(tt) && Dt.test(null !== (et = tt.stack) && void 0 !== et ? et : "")
    }

    function dt(tt, et) {
      if (mt(tt)) throw tt;
      console.error(et, tt)
    }

    function jt(tt, et, Vt, qt, Dt) {
      if (et % qt !== 0 || et + Vt > tt.byteLength) throw new Ot(`${Dt}: ${Vt} bytes at ${et}, ${qt}-aligned, outside ${tt.byteLength} bytes of memory`)
    }

    function Ht(tt, et, Vt, Ot, qt) {
      return 0 === Vt ? null : (jt(et, Vt, Ot * tt.BYTES_PER_ELEMENT, tt.BYTES_PER_ELEMENT, qt), new tt(et, Vt, Ot))
    }

    function Xt(tt, et, Vt, Ot, qt) {
      return 0 === et ? null : (jt(tt, et, Vt, Ot, qt), new DataView(tt, et, Vt))
    }
  },
  40769: (tt, et, Vt) => {
    Vt.d(et, {
      d: () => Ot,
      e: () => Nt,
      g: () => wt,
      k: () => yt,
      m: () => lt,
      n: () => Et,
      q: () => Xt,
      r: () => Qt,
      u: () => ft
    });
    class Ot extends Error {
      constructor(tt) {
        super(`the join's code did not load: ${tt instanceof Error?tt.message:String(tt)}`, {
          cause: tt
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === tt || void 0 === tt ? void 0 : tt.request
      }
    }
    let qt = null,
      Dt = null,
      mt = null;
    const dt = [];
    let jt = null;

    function Ht(tt, et) {
      try {
        tt(et)
      } catch (Vt) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", Vt)
      }
    }

    function Xt() {
      return jt
    }

    function Qt(tt) {
      dt.push(tt), null !== jt && Ht(tt, jt)
    }

    function lt(tt) {
      return qt ??= Promise.all([Vt.e(73), Vt.e(98), Vt.e(226), Vt.e(78), Vt.e(227), Vt.e(201), Vt.e(97), Vt.e(246), Vt.e(273), Vt.e(199), Vt.e(214), Vt.e(191), Vt.e(198), Vt.e(193), Vt.e(144), Vt.e(88), Vt.e(122), Vt.e(252), Vt.e(57)]).then((() => Vt(42820))).then((et => {
        et.loadAudio(tt), jt = et;
        for (const tt of dt) Ht(tt, et);
        return et
      })).catch((tt => {
        throw qt = null, tt
      })), qt
    }
    async function Et(tt, et) {
      try {
        const Vt = await lt(tt);
        await Vt.loadClientGame(et)
      } catch (Vt) {
        throw new Ot(Vt)
      }
    }

    function ft(tt, et) {
      Dt = {
        running: tt,
        shell: et
      }
    }

    function wt() {
      return mt
    }
    async function yt(tt) {
      const et = Dt;
      if ((null === et || void 0 === et ? void 0 : et.running) !== tt) throw new Error("the core's session has ended");
      const Vt = await lt(et.shell.audio).catch((tt => {
        throw new Ot(tt)
      }));
      if (null !== mt) return mt;
      if (Dt !== et || tt.isStopped) throw new Error("the core stopped while the game code loaded");
      if (mt = Vt.startGameHost(tt, et.shell), null === mt) throw new Error("the core's shared tables didn't read, so the game can't start");
      return mt
    }

    function Nt() {
      null !== mt && (null !== jt ? jt.endGameHost(mt) : mt.closeGame()), mt = null, Dt = null
    }
  }
};
Object.freeze(modules);
for (const tt in modules) Object.freeze(modules[tt]);