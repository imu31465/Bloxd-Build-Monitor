export const id = 223;
export const ids = [223];
export const modules = {
  39629: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => Xk,
      f: () => Tk
    });
    const Xk = "The world isn't loaded, so no blocks can be seen.",
      Tk = "The world isn't loaded, so nothing in it can be seen."
  },
  39109: (kk, Fk, Ik) => {
    function Xk(kk) {
      return !(!kk.lobbyLeaderboardInfo && !kk.lobbyManage)
    }
    Ik.d(Fk, {
      b: () => Xk
    })
  },
  36840: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => ik,
      e: () => Tk
    });
    let Xk = () => null;

    function Tk(kk) {
      Xk = kk
    }

    function ik(kk, Fk) {
      return Xk(kk, Fk)
    }
  },
  40602: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => wk,
      g: () => Pk,
      h: () => xk,
      l: () => Hk
    });
    var Xk = Ik(34),
      Tk = Ik(40604),
      ik = Ik(40596),
      yk = Ik(40609),
      lk = Ik(40598),
      ak = Ik(40614),
      qk = Ik(40636);

    function Lk(kk) {
      var Fk, Ik;
      const Xk = (0, ik.k)();
      return Xk ? null === (Fk = (0, Tk.e)(Xk.api, kk[0], kk[1], kk[2])) || void 0 === Fk || null === (Ik = Fk.persisted) || void 0 === Ik ? void 0 : Ik.shared : void 0
    }

    function tk(kk) {
      return `${kk[0]},${kk[1]},${kk[2]}`
    }
    const Zk = new Map;
    let jk = null,
      ek = 0;

    function wk() {
      return ek
    }

    function Hk(kk) {
      const Fk = null !== jk && jk.key === tk(kk.pos) ? jk.type : null;
      if (null === Fk) return kk;
      let Ik = null;
      if ("Iron" === Fk) {
        const {
          cachedPasskey: Fk,
          ...Xk
        } = Jk(kk.pos);
        Ik = {
          yy: null !== Fk && void 0 !== Fk ? Fk : [0, 0, 0, 0],
          ...Xk
        }
      }
      return {
        ...kk,
        type: Fk,
        ironChest: Ik
      }
    }

    function Jk(kk) {
      const Fk = Lk(kk),
        Ik = null === Fk || void 0 === Fk ? void 0 : Fk.ownerDbId,
        Xk = function(kk) {
          var Fk;
          let Ik = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Lk(kk);
          const Xk = tk(kk),
            Tk = Zk.get(Xk);
          return Tk ? Tk.lastOpened < (null !== (Fk = null === Ik || void 0 === Ik ? void 0 : Ik.passkeyLastUpdated) && void 0 !== Fk ? Fk : 0) ? (Zk.delete(Xk), null) : [...Tk.yy] : null
        }(kk, Fk);
      return void 0 === Ik ? {
        cachedPasskey: Xk
      } : {
        ownerDbId: Ik,
        cachedPasskey: Xk
      }
    }(0, qk.l)(yk.d, (kk => {
      const Fk = (0, ak.e)(yk.d, kk);
      if (!(0, ak.c)(Fk) || Fk.GX) return;
      if (ek++, !Fk.SX || null === Fk.EX) return void(jk = null);
      const Ik = tk(Fk.EX);
      jk = {
        key: Ik,
        type: Fk.vX
      }, null !== Fk.OX && Zk.set(Ik, {
        yy: [...Fk.OX],
        lastOpened: Date.now()
      })
    })), (0, qk.f)((() => {
      Zk.clear(), jk = null, ek++
    })), (0, qk.j)((() => {
      null !== jk && (jk = null, ek++, Xk.g.GL("chestToggleFromServer", !1, !0))
    }));
    const xk = {
        boardEditRequested: {
          watch: kk => (0, Xk.i)("EditBoard", (Fk => {
            let {
              pos: Ik
            } = Fk;
            if (null === Ik) return void kk(null);
            const Xk = (0, ik.k)(),
              Tk = (0, ik.y)();
            Xk && Tk && kk(Tk.readBoardToEdit(Xk.api, Xk.chunks, Ik))
          }))
        },
        ironChestOpenRequested: {
          watch: kk => (0, Xk.i)("OpenIronChest", (Fk => {
            let {
              pos: Ik
            } = Fk;
            kk(function(kk) {
              return {
                pos: kk,
                ...Jk(kk)
              }
            }(Ik))
          }))
        }
      },
      Pk = {
        writeOnBoard(kk) {
          var Fk;
          let {
            pos: Ik,
            text: Xk,
            textSize: Tk
          } = kk;
          null === (Fk = (0, ik.k)()) || void 0 === Fk || Fk.send(lk.e.UpdateBoard, (0, lk.ab)({
            Wy: Ik,
            Yy: Xk,
            Ay: Tk
          }))
        },
        writeBook(kk) {
          var Fk;
          let {
            pages: Ik,
            title: Xk,
            published: Tk
          } = kk;
          null === (Fk = (0, ik.k)()) || void 0 === Fk || Fk.send(lk.e.UpdateBook, (0, lk.db)({
            wq: Ik,
            Hq: Xk,
            Jq: Tk
          }))
        },
        writeNameTag(kk) {
          var Fk;
          null === (Fk = (0, ik.k)()) || void 0 === Fk || Fk.send(lk.e.UpdateNameTag, kk)
        },
        setCustomLobbyBlock(kk) {
          let {
            pos: Fk,
            blockName: Ik
          } = kk;
          const Xk = (0, ik.y)(),
            Tk = (0, ik.k)();
          Xk && Tk && Tk.send(lk.e.SetCustomLobbyBlock, (0, lk.O)({
            iL: Xk.blockIdOf(Ik),
            TL: Fk
          }))
        }
      }
  },
  40658: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => ak,
      d: () => yk,
      g: () => lk
    });
    var Xk = Ik(40583),
      Tk = Ik(4792),
      ik = Ik(40596);

    function yk() {
      var kk;
      const Fk = null === (kk = (0, ik.k)()) || void 0 === kk ? void 0 : kk.api.localId;
      return void 0 === Fk || Fk === Xk.Yc ? null : String(Fk)
    }

    function lk(kk) {
      const Fk = (0, ik.k)();
      if (null !== Fk) return kk(Fk);
      let Ik = null;
      const Xk = (0, Tk.u)((() => {
        const Fk = (0, ik.k)();
        null !== Fk && null === Ik && (Xk(), Ik = kk(Fk))
      }));
      return () => {
        var kk;
        Xk(), null === (kk = Ik) || void 0 === kk || kk()
      }
    }

    function ak(kk, Fk, Ik) {
      return {
        current: () => {
          const Ik = (0, ik.k)();
          return null === Ik ? Fk : kk(Ik)()
        },
        watch: Fk => lk((Xk => {
          const Tk = kk(Xk);
          let ik = Tk();
          return Fk(ik), Ik((() => {
            const kk = Tk();
            kk !== ik && (ik = kk, Fk(kk))
          }))
        }))
      }
    }
  },
  40649: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      c: () => qk
    });
    var Xk = Ik(40596),
      Tk = Ik(40658),
      ik = Ik(40661);

    function yk() {
      var kk, Fk;
      return null !== (kk = null === (Fk = (0, Xk.k)()) || void 0 === Fk ? void 0 : Fk.itemBridgeSources) && void 0 !== kk ? kk : ik.b
    }

    function lk(kk) {
      return {
        current: () => yk().states[kk].current(),
        watch: Fk => (0, Tk.g)((Ik => {
          const Xk = Ik.itemBridgeSources.states[kk];
          return Fk(Xk.current()), Xk.watch(Fk)
        }))
      }
    }

    function ak(kk) {
      return {
        watch: Fk => (0, Tk.g)((Ik => Ik.itemBridgeSources.events[kk].watch(Fk)))
      }
    }
    const qk = {
      states: {
        inventory: lk("inventory"),
        hotbar: lk("hotbar"),
        crafting: lk("crafting"),
        heldItemAim: lk("heldItemAim")
      },
      events: {
        hotbarSlotRequested: ak("hotbarSlotRequested"),
        hotbarScrolled: ak("hotbarScrolled"),
        numberKeyPressed: ak("numberKeyPressed"),
        inventoryDropRequested: ak("inventoryDropRequested"),
        chestToggled: ak("chestToggled"),
        chestRefreshed: ak("chestRefreshed"),
        inventorySynced: ak("inventorySynced"),
        enchantingTableOpened: ak("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: kk => yk().commands.selectHotbarSlot(kk),
        removeInventoryItem: kk => yk().commands.removeInventoryItem(kk),
        swapInventorySlots: kk => yk().commands.swapInventorySlots(kk),
        moveInventoryItem: kk => yk().commands.moveInventoryItem(kk),
        quickMoveInventoryItem: kk => yk().commands.quickMoveInventoryItem(kk),
        closeChest: kk => yk().commands.closeChest(kk),
        focusCrafting: kk => yk().commands.focusCrafting(kk),
        craftRecipe: kk => yk().commands.craftRecipe(kk),
        salvageItem: kk => yk().commands.salvageItem(kk),
        enchantItem: kk => yk().commands.enchantItem(kk)
      },
      queries: {
        enchantingOffer: kk => yk().queries.enchantingOffer(kk)
      }
    }
  },
  40661: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => lk
    });
    var Xk = Ik(39629);

    function Tk(kk) {
      return {
        current: () => kk,
        watch: () => () => {}
      }
    }

    function ik() {}
    const yk = Object.freeze([0, 0, 0]),
      lk = {
        states: {
          health: Tk({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: Tk({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: Tk({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: Tk({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: Tk({}),
          creativeVisibility: Tk({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: Tk(null),
          heldItemAim: Tk({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: Tk(!1),
          gliderBoostFuel: Tk(0),
          flight: Tk({
            canFly: !1,
            flying: !1
          }),
          crafting: Tk({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: Tk({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: Tk({}),
          fullInventory: Tk(!1),
          crosshairTarget: Tk({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: Tk(!0),
          freeCamera: Tk({
            allowed: !1,
            movesFly: !1
          }),
          replay: Tk(null),
          replayEdits: Tk(null),
          replayRecorder: Tk({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: Tk(!1)
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
          selectHotbarSlot: ik,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: ik,
          setInventoryOpen: ik,
          changeIronChestPasskey: ik,
          dragReplayCamera: ik,
          applyTemporaryThirdPerson: ik,
          holdEmoteWheel: ik,
          recordFlyingMiddleText: ik,
          focusCrafting: ik,
          craftRecipe: () => ({
            il: 0,
            jy: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: ik,
          setShopOpen: ik,
          buyShopItem: ik,
          lobbyManage: ik,
          sendChatMessage: ik,
          ignorePlayer: ik,
          reportPlayer: ik,
          reportWorldCodeChat: ik,
          requestDiscordReportKey: ik,
          reportLobbyOrGame: ik,
          playEmote: ik,
          updateMyCosmetic: ik,
          writeOnBoard: ik,
          writeBook: ik,
          writeNameTag: ik,
          setCustomLobbyBlock: ik,
          openIronChest: ik,
          sendCodeCollab: ik,
          clickCodeBlock: ik,
          bindCustomButtonKeys: ik,
          pressCustomButton: ik,
          moveReplayFreecam: ik,
          holdReplayFreecamVertical: ik,
          respawn: ik,
          wakeUp: ik,
          requestLeaderboard: ik,
          completeTask: ik,
          setServerCookie: ik,
          answerUiRequest: ik,
          chooseRewardedAd: ik,
          setCameraZoom: ik,
          setFreeCameraMovesFly: ik,
          setBlockHighlight: ik,
          setCrosshairInteractPrompt: ik,
          setLookSensitivity: ik,
          replayAction: ik,
          setReplayPlaying: ik,
          seekReplay: ik,
          setReplayCameraMode: ik,
          syncReplayCameraMode: ik,
          setReplayCameraKeyframe: ik,
          moveReplayCameraKeyframe: ik,
          deleteReplayCameraKeyframes: ik,
          setReplayPlaybackMark: ik,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: ik,
          exportReplayVideo: ik,
          toggleRecording: ik,
          saveClip: ik,
          setRecorderPrefs: ik,
          setReplayViewerOpen: ik
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Xk.c,
          worldCodeAiGameState: () => Xk.f
        },
        lookups: {
          localPos: () => yk,
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
  40592: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      d: () => Sk,
      g: () => zk,
      h: () => vk,
      j: () => Vk,
      n: () => Qk
    });
    var Xk = Ik(39243),
      Tk = Ik(1217),
      ik = Ik(1894),
      yk = Ik(1905),
      lk = Ik(3229),
      ak = Ik(36840),
      qk = Ik(1301),
      Lk = Ik(40596),
      tk = Ik(4814),
      Zk = Ik(2331),
      jk = Ik(40598),
      ek = Ik(40602),
      wk = Ik(40649);
    let Hk = null;

    function Jk(kk) {
      const Fk = new Map,
        Ik = Ik => {
          if ("string" !== typeof Ik) return;
          let Xk = Fk.get(Ik);
          return void 0 === Xk && (Xk = kk(Ik), void 0 !== Xk && Fk.set(Ik, Xk)), Xk
        };
      return new Proxy({}, {
        get: (kk, Fk) => Ik(Fk),
        has: (kk, Fk) => void 0 !== Ik(Fk)
      })
    }

    function xk(kk) {
      const Fk = (0, lk.e)(kk);
      return void 0 !== Fk && (0, lk.i)(Fk) === kk
    }

    function Pk(kk) {
      var Fk;
      const Ik = null === (Fk = (0, Lk.k)()) || void 0 === Fk ? void 0 : Fk.tables;
      if (void 0 === Ik || !xk(kk)) return;
      const Xk = {
          displayName: Ik.getDisplayName(kk)
        },
        Tk = Ik.getItemStat(kk, "description");
      void 0 !== Tk && null !== Tk && (Xk.description = Tk);
      const {
        rootName: ik
      } = Ik.getMetaInfo(kk);
      ik !== kk && (Xk.rootName = ik);
      const yk = Ik.getItemStat(kk, "armourReduction");
      return void 0 !== yk && null !== yk && (Xk.armourReduction = yk), Xk
    }(0, Lk.A)((kk => {
      Hk = kk
    }));
    const Kk = (0, yk.j)("DisplayName", "Description");

    function Qk() {
      return Boolean(ik.e.get("useInventory") && ik.e.get("useFullInventory"))
    }
    let sk = null;
    const Vk = {
        inventory: function() {
          const kk = wk.c.states.inventory;
          let Fk = null;
          const Ik = kk => {
            var Ik;
            return null === kk.chest ? kk : ((null === (Ik = Fk) || void 0 === Ik ? void 0 : Ik.from) === kk && Fk.chestVersion === (0, ek.d)() || (Fk = {
              from: kk,
              chestVersion: (0, ek.d)(),
              view: {
                ...kk,
                chest: (0, ek.l)(kk.chest)
              }
            }), Fk.view)
          };
          return {
            current: () => Ik(kk.current()),
            watch: Fk => kk.watch((kk => {
              Fk(Ik(kk))
            }))
          }
        }(),
        crafting: wk.c.states.crafting,
        stationItems: {
          current() {
            var kk;
            return (null === (kk = sk) || void 0 === kk ? void 0 : kk.namesVersion) !== (0, lk.k)() && (sk = {
              namesVersion: (0, lk.k)(),
              items: {
                enchantable: Jk((kk => {
                  const Fk = (0, lk.e)(kk);
                  return void 0 !== Fk && null !== Hk && Hk.enchantmentPerksOf(Fk).length > 0 || void 0
                })),
                salvageable: Jk((kk => !(!xk(kk) || null === (0, ak.c)(kk)) || void 0))
              }
            }), sk.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let kk = null;
          const Fk = () => {
            var Fk;
            return (null === (Fk = kk) || void 0 === Fk ? void 0 : Fk.namesVersion) !== (0, lk.k)() && (kk = {
              namesVersion: (0, lk.k)(),
              infos: Jk(Pk)
            }), kk.infos
          };
          return {
            current: Fk,
            watch: Ik => (0, yk.s)((Xk => {
              Xk.some(Kk) && (kk = null, Ik(Fk()))
            }))
          }
        }(),
        creativeVisibility: (0, yk.p)((function() {
          const kk = {};
          for (const Tk of null !== (Fk = null === (Ik = Hk) || void 0 === Ik ? void 0 : Ik.creativeItemIds()) && void 0 !== Fk ? Fk : []) {
            var Fk, Ik, yk, ak;
            const qk = (0, lk.i)(Tk);
            if (void 0 === qk) continue;
            const Lk = null !== (yk = ik.e.get((0, Xk.g)(qk, "showInCreativeInven"))) && void 0 !== yk ? yk : null === (ak = Hk) || void 0 === ak ? void 0 : ak.showInCreativeInvenOf(Tk);
            "boolean" === typeof Lk && (kk[qk] = Lk)
          }
          return {
            publicLobby: (0, Tk.K)((0, qk.d)().lobbyName),
            shownInGame: kk
          }
        }), ["connectedGameChanged"], (0, yk.j)("ShowInCreativeInven")),
        fullInventory: (0, yk.p)(Qk, [], (0, yk.n)("useInventory", "useFullInventory"))
      },
      zk = {
        inventoryDropRequested: wk.c.events.inventoryDropRequested,
        chestToggled: wk.c.events.chestToggled,
        chestRefreshed: wk.c.events.chestRefreshed,
        inventorySynced: wk.c.events.inventorySynced,
        enchantingTableOpened: wk.c.events.enchantingTableOpened
      },
      Sk = {
        removeInventoryItem: wk.c.commands.removeInventoryItem,
        swapInventorySlots: wk.c.commands.swapInventorySlots,
        moveInventoryItem: wk.c.commands.moveInventoryItem,
        quickMoveInventoryItem: wk.c.commands.quickMoveInventoryItem,
        closeChest: wk.c.commands.closeChest,
        setInventoryOpen(kk) {
          (0, tk.g)(Zk.A.InventoryOpen, kk ? Zk.A.InventoryOpen : 0)
        },
        focusCrafting: wk.c.commands.focusCrafting,
        craftRecipe: wk.c.commands.craftRecipe,
        salvageItem: wk.c.commands.salvageItem,
        enchantItem: wk.c.commands.enchantItem,
        changeIronChestPasskey(kk) {
          var Fk;
          let {
            pos: Ik,
            yy: Xk
          } = kk;
          null === (Fk = (0, Lk.k)()) || void 0 === Fk || Fk.send(jk.e.ChangeIronChestPasskey, (0, jk.j)({
            EX: Ik,
            yy: Xk
          }))
        },
        openIronChest(kk) {
          var Fk;
          let {
            pos: Ik,
            yy: Xk
          } = kk;
          null === (Fk = (0, Lk.k)()) || void 0 === Fk || Fk.send(jk.e.OpenIronChest, (0, jk.F)({
            EX: Ik,
            yy: Xk
          }))
        }
      },
      vk = {
        enchantingOffer: wk.c.queries.enchantingOffer
      }
  },
  40641: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      b: () => Xk,
      e: () => Lk,
      f: () => yk,
      g: () => Tk,
      i: () => lk,
      l: () => qk
    });
    class Xk extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function Tk(kk) {
      return kk instanceof RangeError && /call stack/i.test(kk.message) || kk instanceof Error && "InternalError" === kk.name && /recursion/i.test(kk.message)
    }
    const ik = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function yk(kk) {
      var Fk;
      return kk instanceof WebAssembly.RuntimeError || kk instanceof Xk || Tk(kk) && ik.test(null !== (Fk = kk.stack) && void 0 !== Fk ? Fk : "")
    }

    function lk(kk, Fk) {
      if (yk(kk)) throw kk;
      console.error(Fk, kk)
    }

    function ak(kk, Fk, Ik, Tk, ik) {
      if (Fk % Tk !== 0 || Fk + Ik > kk.byteLength) throw new Xk(`${ik}: ${Ik} bytes at ${Fk}, ${Tk}-aligned, outside ${kk.byteLength} bytes of memory`)
    }

    function qk(kk, Fk, Ik, Xk, Tk) {
      return 0 === Ik ? null : (ak(Fk, Ik, Xk * kk.BYTES_PER_ELEMENT, kk.BYTES_PER_ELEMENT, Tk), new kk(Fk, Ik, Xk))
    }

    function Lk(kk, Fk, Ik, Xk, Tk) {
      return 0 === Fk ? null : (ak(kk, Fk, Ik, Xk, Tk), new DataView(kk, Fk, Ik))
    }
  },
  40596: (kk, Fk, Ik) => {
    Ik.d(Fk, {
      A: () => tk,
      C: () => ek,
      e: () => Xk,
      i: () => Jk,
      k: () => wk,
      n: () => Hk,
      r: () => Zk,
      u: () => jk,
      y: () => Lk
    });
    class Xk extends Error {
      constructor(kk) {
        super(`the join's code did not load: ${kk instanceof Error?kk.message:String(kk)}`, {
          cause: kk
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === kk || void 0 === kk ? void 0 : kk.request
      }
    }
    let Tk = null,
      ik = null,
      yk = null;
    const lk = [];
    let ak = null;

    function qk(kk, Fk) {
      try {
        kk(Fk)
      } catch (Ik) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", Ik)
      }
    }

    function Lk() {
      return ak
    }

    function tk(kk) {
      lk.push(kk), null !== ak && qk(kk, ak)
    }

    function Zk(kk) {
      return Tk ??= Promise.all([Ik.e(72), Ik.e(96), Ik.e(221), Ik.e(77), Ik.e(222), Ik.e(198), Ik.e(95), Ik.e(240), Ik.e(269), Ik.e(197), Ik.e(210), Ik.e(189), Ik.e(196), Ik.e(191), Ik.e(142), Ik.e(87), Ik.e(121), Ik.e(247), Ik.e(56)]).then((() => Ik(42580))).then((Fk => {
        Fk.loadAudio(kk), ak = Fk;
        for (const kk of lk) qk(kk, Fk);
        return Fk
      })).catch((kk => {
        throw Tk = null, kk
      })), Tk
    }
    async function jk(kk, Fk) {
      try {
        const Ik = await Zk(kk);
        await Ik.loadClientGame(Fk)
      } catch (Ik) {
        throw new Xk(Ik)
      }
    }

    function ek(kk, Fk) {
      ik = {
        running: kk,
        shell: Fk
      }
    }

    function wk() {
      return yk
    }
    async function Hk(kk) {
      const Fk = ik;
      if ((null === Fk || void 0 === Fk ? void 0 : Fk.running) !== kk) throw new Error("the core's session has ended");
      const Ik = await Zk(Fk.shell.audio).catch((kk => {
        throw new Xk(kk)
      }));
      if (null !== yk) return yk;
      if (ik !== Fk || kk.isStopped) throw new Error("the core stopped while the game code loaded");
      if (yk = Ik.startGameHost(kk, Fk.shell), null === yk) throw new Error("the core's shared tables didn't read, so the game can't start");
      return yk
    }

    function Jk() {
      null !== yk && (null !== ak ? ak.endGameHost(yk) : yk.closeGame()), yk = null, ik = null
    }
  }
};
Object.freeze(modules);
for (const kk in modules) Object.freeze(modules[kk]);