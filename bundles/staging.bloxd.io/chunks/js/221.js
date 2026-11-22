export const id = 221;
export const ids = [221];
export const modules = {
  39200: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk,
      d: () => fk
    });
    const Dk = "The world isn't loaded, so no blocks can be seen.",
      fk = "The world isn't loaded, so nothing in it can be seen."
  },
  38676: (kk, ek, ik) => {
    function Dk(kk) {
      return !(!kk.lobbyLeaderboardInfo && !kk.lobbyManage)
    }
    ik.d(ek, {
      c: () => Dk
    })
  },
  36391: (kk, ek, ik) => {
    ik.d(ek, {
      b: () => Sk,
      d: () => fk
    });
    let Dk = () => null;

    function fk(kk) {
      Dk = kk
    }

    function Sk(kk, ek) {
      return Dk(kk, ek)
    }
  },
  40180: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Hk,
      f: () => yk,
      g: () => pk,
      k: () => wk
    });
    var Dk = ik(26),
      fk = ik(40186),
      Sk = ik(40165),
      bk = ik(40191),
      rk = ik(40172),
      Pk = ik(40196),
      mk = ik(40218);

    function Mk(kk) {
      var ek, ik;
      const Dk = (0, Sk.g)();
      return Dk ? null === (ek = (0, fk.c)(Dk.api, kk[0], kk[1], kk[2])) || void 0 === ek || null === (ik = ek.persisted) || void 0 === ik ? void 0 : ik.shared : void 0
    }

    function Kk(kk) {
      return `${kk[0]},${kk[1]},${kk[2]}`
    }
    const xk = new Map;
    let nk = null,
      Uk = 0;

    function Hk() {
      return Uk
    }

    function wk(kk) {
      const ek = null !== nk && nk.key === Kk(kk.pos) ? nk.type : null;
      if (null === ek) return kk;
      let ik = null;
      if ("Iron" === ek) {
        const {
          cachedPasskey: ek,
          ...Dk
        } = lk(kk.pos);
        ik = {
          Gb: null !== ek && void 0 !== ek ? ek : [0, 0, 0, 0],
          ...Dk
        }
      }
      return {
        ...kk,
        type: ek,
        ironChest: ik
      }
    }

    function lk(kk) {
      const ek = Mk(kk),
        ik = null === ek || void 0 === ek ? void 0 : ek.ownerDbId,
        Dk = function(kk) {
          var ek;
          let ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Mk(kk);
          const Dk = Kk(kk),
            fk = xk.get(Dk);
          return fk ? fk.lastOpened < (null !== (ek = null === ik || void 0 === ik ? void 0 : ik.passkeyLastUpdated) && void 0 !== ek ? ek : 0) ? (xk.delete(Dk), null) : [...fk.Gb] : null
        }(kk, ek);
      return void 0 === ik ? {
        cachedPasskey: Dk
      } : {
        ownerDbId: ik,
        cachedPasskey: Dk
      }
    }(0, mk.m)(bk.c, (kk => {
      const ek = (0, Pk.i)(bk.c, kk);
      if (!(0, Pk.e)(ek) || ek.ye) return;
      if (Uk++, !ek.ne || null === ek.le) return void(nk = null);
      const ik = Kk(ek.le);
      nk = {
        key: ik,
        type: ek.He
      }, null !== ek.pe && xk.set(ik, {
        Gb: [...ek.pe],
        lastOpened: Date.now()
      })
    })), (0, mk.g)((() => {
      xk.clear(), nk = null, Uk++
    })), (0, mk.k)((() => {
      null !== nk && (nk = null, Uk++, Dk.j.tm("chestToggleFromServer", !1, !0))
    }));
    const pk = {
        boardEditRequested: {
          watch: kk => (0, Dk.k)("EditBoard", (ek => {
            let {
              pos: ik
            } = ek;
            if (null === ik) return void kk(null);
            const Dk = (0, Sk.g)(),
              fk = (0, Sk.q)();
            Dk && fk && kk(fk.readBoardToEdit(Dk.api, Dk.chunks, ik))
          }))
        },
        ironChestOpenRequested: {
          watch: kk => (0, Dk.k)("OpenIronChest", (ek => {
            let {
              pos: ik
            } = ek;
            kk(function(kk) {
              return {
                pos: kk,
                ...lk(kk)
              }
            }(ik))
          }))
        }
      },
      yk = {
        writeOnBoard(kk) {
          var ek;
          let {
            pos: ik,
            text: Dk,
            textSize: fk
          } = kk;
          null === (ek = (0, Sk.g)()) || void 0 === ek || ek.send(rk.e.UpdateBoard, (0, rk.$)({
            kK: ik,
            eK: Dk,
            iK: fk
          }))
        },
        writeBook(kk) {
          var ek;
          let {
            pages: ik,
            title: Dk,
            published: fk
          } = kk;
          null === (ek = (0, Sk.g)()) || void 0 === ek || ek.send(rk.e.UpdateBook, (0, rk.cb)({
            Bb: ik,
            cb: Dk,
            Tb: fk
          }))
        },
        writeNameTag(kk) {
          var ek;
          null === (ek = (0, Sk.g)()) || void 0 === ek || ek.send(rk.e.UpdateNameTag, kk)
        },
        setCustomLobbyBlock(kk) {
          let {
            pos: ek,
            blockName: ik
          } = kk;
          const Dk = (0, Sk.q)(),
            fk = (0, Sk.g)();
          Dk && fk && fk.send(rk.e.SetCustomLobbyBlock, (0, rk.M)({
            wP: Dk.blockIdOf(ik),
            HP: ek
          }))
        }
      }
  },
  40230: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Pk,
      f: () => bk,
      g: () => rk
    });
    var Dk = ik(40157),
      fk = ik(4721),
      Sk = ik(40165);

    function bk() {
      var kk;
      const ek = null === (kk = (0, Sk.g)()) || void 0 === kk ? void 0 : kk.api.localId;
      return void 0 === ek || ek === Dk.Sc ? null : String(ek)
    }

    function rk(kk) {
      const ek = (0, Sk.g)();
      if (null !== ek) return kk(ek);
      let ik = null;
      const Dk = (0, fk.v)((() => {
        const ek = (0, Sk.g)();
        null !== ek && null === ik && (Dk(), ik = kk(ek))
      }));
      return () => {
        var kk;
        Dk(), null === (kk = ik) || void 0 === kk || kk()
      }
    }

    function Pk(kk, ek, ik) {
      return {
        current: () => {
          const ik = (0, Sk.g)();
          return null === ik ? ek : kk(ik)()
        },
        watch: ek => rk((Dk => {
          const fk = kk(Dk);
          let Sk = fk();
          return ek(Sk), ik((() => {
            const kk = fk();
            kk !== Sk && (Sk = kk, ek(kk))
          }))
        }))
      }
    }
  },
  40223: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => mk
    });
    var Dk = ik(40165),
      fk = ik(40230),
      Sk = ik(40238);

    function bk() {
      var kk, ek;
      return null !== (kk = null === (ek = (0, Dk.g)()) || void 0 === ek ? void 0 : ek.itemBridgeSources) && void 0 !== kk ? kk : Sk.e
    }

    function rk(kk) {
      return {
        current: () => bk().states[kk].current(),
        watch: ek => (0, fk.g)((ik => {
          const Dk = ik.itemBridgeSources.states[kk];
          return ek(Dk.current()), Dk.watch(ek)
        }))
      }
    }

    function Pk(kk) {
      return {
        watch: ek => (0, fk.g)((ik => ik.itemBridgeSources.events[kk].watch(ek)))
      }
    }
    const mk = {
      states: {
        inventory: rk("inventory"),
        hotbar: rk("hotbar"),
        crafting: rk("crafting"),
        heldItemAim: rk("heldItemAim")
      },
      events: {
        hotbarSlotRequested: Pk("hotbarSlotRequested"),
        hotbarScrolled: Pk("hotbarScrolled"),
        numberKeyPressed: Pk("numberKeyPressed"),
        inventoryDropRequested: Pk("inventoryDropRequested"),
        chestToggled: Pk("chestToggled"),
        chestRefreshed: Pk("chestRefreshed"),
        inventorySynced: Pk("inventorySynced"),
        enchantingTableOpened: Pk("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: kk => bk().commands.selectHotbarSlot(kk),
        removeInventoryItem: kk => bk().commands.removeInventoryItem(kk),
        swapInventorySlots: kk => bk().commands.swapInventorySlots(kk),
        moveInventoryItem: kk => bk().commands.moveInventoryItem(kk),
        quickMoveInventoryItem: kk => bk().commands.quickMoveInventoryItem(kk),
        closeChest: kk => bk().commands.closeChest(kk),
        focusCrafting: kk => bk().commands.focusCrafting(kk),
        craftRecipe: kk => bk().commands.craftRecipe(kk),
        salvageItem: kk => bk().commands.salvageItem(kk),
        enchantItem: kk => bk().commands.enchantItem(kk)
      },
      queries: {
        enchantingOffer: kk => bk().queries.enchantingOffer(kk)
      }
    }
  },
  40238: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => rk
    });
    var Dk = ik(39200);

    function fk(kk) {
      return {
        current: () => kk,
        watch: () => () => {}
      }
    }

    function Sk() {}
    const bk = Object.freeze([0, 0, 0]),
      rk = {
        states: {
          health: fk({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: fk({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: fk({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: fk({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: fk({}),
          creativeVisibility: fk({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: fk(null),
          heldItemAim: fk({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: fk(!1),
          gliderBoostFuel: fk(0),
          flight: fk({
            canFly: !1,
            flying: !1
          }),
          crafting: fk({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: fk({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: fk({}),
          fullInventory: fk(!1),
          crosshairTarget: fk({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: fk(!0),
          freeCamera: fk({
            allowed: !1,
            movesFly: !1
          }),
          replay: fk(null),
          replayEdits: fk(null),
          replayRecorder: fk({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: fk(!1)
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
          selectHotbarSlot: Sk,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Sk,
          setInventoryOpen: Sk,
          changeIronChestPasskey: Sk,
          dragReplayCamera: Sk,
          applyTemporaryThirdPerson: Sk,
          holdEmoteWheel: Sk,
          recordFlyingMiddleText: Sk,
          focusCrafting: Sk,
          craftRecipe: () => ({
            EM: 0,
            vr: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Sk,
          setShopOpen: Sk,
          buyShopItem: Sk,
          lobbyManage: Sk,
          sendChatMessage: Sk,
          ignorePlayer: Sk,
          reportPlayer: Sk,
          reportWorldCodeChat: Sk,
          requestDiscordReportKey: Sk,
          reportLobbyOrGame: Sk,
          playEmote: Sk,
          updateMyCosmetic: Sk,
          writeOnBoard: Sk,
          writeBook: Sk,
          writeNameTag: Sk,
          setCustomLobbyBlock: Sk,
          openIronChest: Sk,
          sendCodeCollab: Sk,
          clickCodeBlock: Sk,
          bindCustomButtonKeys: Sk,
          pressCustomButton: Sk,
          moveReplayFreecam: Sk,
          holdReplayFreecamVertical: Sk,
          respawn: Sk,
          wakeUp: Sk,
          requestLeaderboard: Sk,
          completeTask: Sk,
          setServerCookie: Sk,
          answerUiRequest: Sk,
          chooseRewardedAd: Sk,
          setCameraZoom: Sk,
          setFreeCameraMovesFly: Sk,
          setBlockHighlight: Sk,
          setCrosshairInteractPrompt: Sk,
          setLookSensitivity: Sk,
          replayAction: Sk,
          setReplayPlaying: Sk,
          seekReplay: Sk,
          setReplayCameraMode: Sk,
          syncReplayCameraMode: Sk,
          setReplayCameraKeyframe: Sk,
          moveReplayCameraKeyframe: Sk,
          deleteReplayCameraKeyframes: Sk,
          setReplayPlaybackMark: Sk,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Sk,
          exportReplayVideo: Sk,
          toggleRecording: Sk,
          saveClip: Sk,
          setRecorderPrefs: Sk,
          setReplayViewerOpen: Sk
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Dk.c,
          worldCodeAiGameState: () => Dk.d
        },
        lookups: {
          localPos: () => bk,
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
  40161: (kk, ek, ik) => {
    ik.d(ek, {
      d: () => sk,
      e: () => jk,
      f: () => dk,
      i: () => Ak,
      k: () => Lk
    });
    var Dk = ik(38805),
      fk = ik(1207),
      Sk = ik(1911),
      bk = ik(1920),
      rk = ik(3261),
      Pk = ik(36391),
      mk = ik(1302),
      Mk = ik(40165),
      Kk = ik(4752),
      xk = ik(2388),
      nk = ik(40172),
      Uk = ik(40180),
      Hk = ik(40223);
    let wk = null;

    function lk(kk) {
      const ek = new Map,
        ik = ik => {
          if ("string" !== typeof ik) return;
          let Dk = ek.get(ik);
          return void 0 === Dk && (Dk = kk(ik), void 0 !== Dk && ek.set(ik, Dk)), Dk
        };
      return new Proxy({}, {
        get: (kk, ek) => ik(ek),
        has: (kk, ek) => void 0 !== ik(ek)
      })
    }

    function pk(kk) {
      const ek = (0, rk.e)(kk);
      return void 0 !== ek && (0, rk.h)(ek) === kk
    }

    function yk(kk) {
      var ek;
      const ik = null === (ek = (0, Mk.g)()) || void 0 === ek ? void 0 : ek.tables;
      if (void 0 === ik || !pk(kk)) return;
      const Dk = {
          displayName: ik.getDisplayName(kk)
        },
        fk = ik.getItemStat(kk, "description");
      void 0 !== fk && null !== fk && (Dk.description = fk);
      const {
        rootName: Sk
      } = ik.getMetaInfo(kk);
      Sk !== kk && (Dk.rootName = Sk);
      const bk = ik.getItemStat(kk, "armourReduction");
      return void 0 !== bk && null !== bk && (Dk.armourReduction = bk), Dk
    }(0, Mk.u)((kk => {
      wk = kk
    }));
    const Yk = (0, bk.k)("DisplayName", "Description");

    function Lk() {
      return Boolean(Sk.c.get("useInventory") && Sk.c.get("useFullInventory"))
    }
    let Ck = null;
    const Ak = {
        inventory: function() {
          const kk = Hk.d.states.inventory;
          let ek = null;
          const ik = kk => {
            var ik;
            return null === kk.chest ? kk : ((null === (ik = ek) || void 0 === ik ? void 0 : ik.from) === kk && ek.chestVersion === (0, Uk.e)() || (ek = {
              from: kk,
              chestVersion: (0, Uk.e)(),
              view: {
                ...kk,
                chest: (0, Uk.k)(kk.chest)
              }
            }), ek.view)
          };
          return {
            current: () => ik(kk.current()),
            watch: ek => kk.watch((kk => {
              ek(ik(kk))
            }))
          }
        }(),
        crafting: Hk.d.states.crafting,
        stationItems: {
          current() {
            var kk;
            return (null === (kk = Ck) || void 0 === kk ? void 0 : kk.namesVersion) !== (0, rk.l)() && (Ck = {
              namesVersion: (0, rk.l)(),
              items: {
                enchantable: lk((kk => {
                  const ek = (0, rk.e)(kk);
                  return void 0 !== ek && null !== wk && wk.enchantmentPerksOf(ek).length > 0 || void 0
                })),
                salvageable: lk((kk => !(!pk(kk) || null === (0, Pk.b)(kk)) || void 0))
              }
            }), Ck.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let kk = null;
          const ek = () => {
            var ek;
            return (null === (ek = kk) || void 0 === ek ? void 0 : ek.namesVersion) !== (0, rk.l)() && (kk = {
              namesVersion: (0, rk.l)(),
              infos: lk(yk)
            }), kk.infos
          };
          return {
            current: ek,
            watch: ik => (0, bk.t)((Dk => {
              Dk.some(Yk) && (kk = null, ik(ek()))
            }))
          }
        }(),
        creativeVisibility: (0, bk.p)((function() {
          const kk = {};
          for (const fk of null !== (ek = null === (ik = wk) || void 0 === ik ? void 0 : ik.creativeItemIds()) && void 0 !== ek ? ek : []) {
            var ek, ik, bk, Pk;
            const mk = (0, rk.h)(fk);
            if (void 0 === mk) continue;
            const Mk = null !== (bk = Sk.c.get((0, Dk.e)(mk, "showInCreativeInven"))) && void 0 !== bk ? bk : null === (Pk = wk) || void 0 === Pk ? void 0 : Pk.showInCreativeInvenOf(fk);
            "boolean" === typeof Mk && (kk[mk] = Mk)
          }
          return {
            publicLobby: (0, fk.I)((0, mk.c)().lobbyName),
            shownInGame: kk
          }
        }), ["connectedGameChanged"], (0, bk.k)("ShowInCreativeInven")),
        fullInventory: (0, bk.p)(Lk, [], (0, bk.o)("useInventory", "useFullInventory"))
      },
      jk = {
        inventoryDropRequested: Hk.d.events.inventoryDropRequested,
        chestToggled: Hk.d.events.chestToggled,
        chestRefreshed: Hk.d.events.chestRefreshed,
        inventorySynced: Hk.d.events.inventorySynced,
        enchantingTableOpened: Hk.d.events.enchantingTableOpened
      },
      sk = {
        removeInventoryItem: Hk.d.commands.removeInventoryItem,
        swapInventorySlots: Hk.d.commands.swapInventorySlots,
        moveInventoryItem: Hk.d.commands.moveInventoryItem,
        quickMoveInventoryItem: Hk.d.commands.quickMoveInventoryItem,
        closeChest: Hk.d.commands.closeChest,
        setInventoryOpen(kk) {
          (0, Kk.j)(xk.t.InventoryOpen, kk ? xk.t.InventoryOpen : 0)
        },
        focusCrafting: Hk.d.commands.focusCrafting,
        craftRecipe: Hk.d.commands.craftRecipe,
        salvageItem: Hk.d.commands.salvageItem,
        enchantItem: Hk.d.commands.enchantItem,
        changeIronChestPasskey(kk) {
          var ek;
          let {
            pos: ik,
            Gb: Dk
          } = kk;
          null === (ek = (0, Mk.g)()) || void 0 === ek || ek.send(nk.e.ChangeIronChestPasskey, (0, nk.h)({
            le: ik,
            Gb: Dk
          }))
        },
        openIronChest(kk) {
          var ek;
          let {
            pos: ik,
            Gb: Dk
          } = kk;
          null === (ek = (0, Mk.g)()) || void 0 === ek || ek.send(nk.e.OpenIronChest, (0, nk.D)({
            le: ik,
            Gb: Dk
          }))
        }
      },
      dk = {
        enchantingOffer: Hk.d.queries.enchantingOffer
      }
  },
  40221: (kk, ek, ik) => {
    ik.d(ek, {
      c: () => Dk,
      g: () => Mk,
      h: () => bk,
      k: () => fk,
      m: () => rk,
      n: () => mk
    });
    class Dk extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function fk(kk) {
      return kk instanceof RangeError && /call stack/i.test(kk.message) || kk instanceof Error && "InternalError" === kk.name && /recursion/i.test(kk.message)
    }
    const Sk = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function bk(kk) {
      var ek;
      return kk instanceof WebAssembly.RuntimeError || kk instanceof Dk || fk(kk) && Sk.test(null !== (ek = kk.stack) && void 0 !== ek ? ek : "")
    }

    function rk(kk, ek) {
      if (bk(kk)) throw kk;
      console.error(ek, kk)
    }

    function Pk(kk, ek, ik, fk, Sk) {
      if (ek % fk !== 0 || ek + ik > kk.byteLength) throw new Dk(`${Sk}: ${ik} bytes at ${ek}, ${fk}-aligned, outside ${kk.byteLength} bytes of memory`)
    }

    function mk(kk, ek, ik, Dk, fk) {
      return 0 === ik ? null : (Pk(ek, ik, Dk * kk.BYTES_PER_ELEMENT, kk.BYTES_PER_ELEMENT, fk), new kk(ek, ik, Dk))
    }

    function Mk(kk, ek, ik, Dk, fk) {
      return 0 === ek ? null : (Pk(kk, ek, ik, Dk, fk), new DataView(kk, ek, ik))
    }
  },
  40165: (kk, ek, ik) => {
    ik.d(ek, {
      e: () => Dk,
      f: () => lk,
      g: () => Hk,
      h: () => wk,
      j: () => xk,
      m: () => nk,
      q: () => Mk,
      u: () => Kk,
      w: () => Uk
    });
    class Dk extends Error {
      constructor(kk) {
        super(`the join's code did not load: ${kk instanceof Error?kk.message:String(kk)}`, {
          cause: kk
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === kk || void 0 === kk ? void 0 : kk.request
      }
    }
    let fk = null,
      Sk = null,
      bk = null;
    const rk = [];
    let Pk = null;

    function mk(kk, ek) {
      try {
        kk(ek)
      } catch (ik) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", ik)
      }
    }

    function Mk() {
      return Pk
    }

    function Kk(kk) {
      rk.push(kk), null !== Pk && mk(kk, Pk)
    }

    function xk(kk) {
      return fk ??= Promise.all([ik.e(72), ik.e(96), ik.e(219), ik.e(77), ik.e(220), ik.e(200), ik.e(95), ik.e(238), ik.e(265), ik.e(198), ik.e(267), ik.e(191), ik.e(197), ik.e(193), ik.e(141), ik.e(87), ik.e(121), ik.e(243), ik.e(56)]).then((() => ik(42177))).then((ek => {
        ek.loadAudio(kk), Pk = ek;
        for (const kk of rk) mk(kk, ek);
        return ek
      })).catch((kk => {
        throw fk = null, kk
      })), fk
    }
    async function nk(kk, ek) {
      try {
        const ik = await xk(kk);
        await ik.loadClientGame(ek)
      } catch (ik) {
        throw new Dk(ik)
      }
    }

    function Uk(kk, ek) {
      Sk = {
        running: kk,
        shell: ek
      }
    }

    function Hk() {
      return bk
    }
    async function wk(kk) {
      const ek = Sk;
      if ((null === ek || void 0 === ek ? void 0 : ek.running) !== kk) throw new Error("the core's session has ended");
      const ik = await xk(ek.shell.audio).catch((kk => {
        throw new Dk(kk)
      }));
      if (null !== bk) return bk;
      if (Sk !== ek || kk.isStopped) throw new Error("the core stopped while the game code loaded");
      if (bk = ik.startGameHost(kk, ek.shell), null === bk) throw new Error("the core's shared tables didn't read, so the game can't start");
      return bk
    }

    function lk() {
      null !== bk && (null !== Pk ? Pk.endGameHost(bk) : bk.closeGame()), bk = null, Sk = null
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);