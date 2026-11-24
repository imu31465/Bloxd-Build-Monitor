export const id = 228;
export const ids = [228];
export const modules = {
  39842: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Op,
      g: () => op
    });
    const Op = "The world isn't loaded, so no blocks can be seen.",
      op = "The world isn't loaded, so nothing in it can be seen."
  },
  39281: (pp, ip, cp) => {
    function Op(pp) {
      return !(!pp.lobbyLeaderboardInfo && !pp.lobbyManage)
    }
    cp.d(ip, {
      d: () => Op
    })
  },
  37019: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip,
      f: () => op
    });
    let Op = () => null;

    function op(pp) {
      Op = pp
    }

    function Ip(pp, ip) {
      return Op(pp, ip)
    }
  },
  40798: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Up,
      c: () => Hp,
      g: () => tp,
      h: () => wp
    });
    var Op = cp(34),
      op = cp(40806),
      Ip = cp(40783),
      Sp = cp(40813),
      xp = cp(40792),
      Lp = cp(40818),
      Yp = cp(40837);

    function Dp(pp) {
      var ip, cp;
      const Op = (0, Ip.k)();
      return Op ? null === (ip = (0, op.d)(Op.api, pp[0], pp[1], pp[2])) || void 0 === ip || null === (cp = ip.persisted) || void 0 === cp ? void 0 : cp.shared : void 0
    }

    function Ap(pp) {
      return `${pp[0]},${pp[1]},${pp[2]}`
    }
    const Pp = new Map;
    let Wp = null,
      yp = 0;

    function Up() {
      return yp
    }

    function wp(pp) {
      const ip = null !== Wp && Wp.key === Ap(pp.pos) ? Wp.type : null;
      if (null === ip) return pp;
      let cp = null;
      if ("Iron" === ip) {
        const {
          cachedPasskey: ip,
          ...Op
        } = vp(pp.pos);
        cp = {
          Zx: null !== ip && void 0 !== ip ? ip : [0, 0, 0, 0],
          ...Op
        }
      }
      return {
        ...pp,
        type: ip,
        ironChest: cp
      }
    }

    function vp(pp) {
      const ip = Dp(pp),
        cp = null === ip || void 0 === ip ? void 0 : ip.ownerDbId,
        Op = function(pp) {
          var ip;
          let cp = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Dp(pp);
          const Op = Ap(pp),
            op = Pp.get(Op);
          return op ? op.lastOpened < (null !== (ip = null === cp || void 0 === cp ? void 0 : cp.passkeyLastUpdated) && void 0 !== ip ? ip : 0) ? (Pp.delete(Op), null) : [...op.Zx] : null
        }(pp, ip);
      return void 0 === cp ? {
        cachedPasskey: Op
      } : {
        ownerDbId: cp,
        cachedPasskey: Op
      }
    }(0, Yp.h)(Sp.d, (pp => {
      const ip = (0, Lp.f)(Sp.d, pp);
      if (!(0, Lp.b)(ip) || ip.UI) return;
      if (yp++, !ip.YI || null === ip.WI) return void(Wp = null);
      const cp = Ap(ip.WI);
      Wp = {
        key: cp,
        type: ip.AI
      }, null !== ip.yI && Pp.set(cp, {
        Zx: [...ip.yI],
        lastOpened: Date.now()
      })
    })), (0, Yp.d)((() => {
      Pp.clear(), Wp = null, yp++
    })), (0, Yp.e)((() => {
      null !== Wp && (Wp = null, yp++, Op.m.GA("chestToggleFromServer", !1, !0))
    }));
    const tp = {
        boardEditRequested: {
          watch: pp => (0, Op.n)("EditBoard", (ip => {
            let {
              pos: cp
            } = ip;
            if (null === cp) return void pp(null);
            const Op = (0, Ip.k)(),
              op = (0, Ip.u)();
            Op && op && pp(op.readBoardToEdit(Op.api, Op.chunks, cp))
          }))
        },
        ironChestOpenRequested: {
          watch: pp => (0, Op.n)("OpenIronChest", (ip => {
            let {
              pos: cp
            } = ip;
            pp(function(pp) {
              return {
                pos: pp,
                ...vp(pp)
              }
            }(cp))
          }))
        }
      },
      Hp = {
        writeOnBoard(pp) {
          var ip;
          let {
            pos: cp,
            text: Op,
            textSize: op
          } = pp;
          null === (ip = (0, Ip.k)()) || void 0 === ip || ip.send(xp.c.UpdateBoard, (0, xp.S)({
            nL: cp,
            FL: Op,
            gL: op
          }))
        },
        writeBook(pp) {
          var ip;
          let {
            pages: cp,
            title: Op,
            published: op
          } = pp;
          null === (ip = (0, Ip.k)()) || void 0 === ip || ip.send(xp.c.UpdateBook, (0, xp.W)({
            yx: cp,
            Ux: Op,
            wx: op
          }))
        },
        writeNameTag(pp) {
          var ip;
          null === (ip = (0, Ip.k)()) || void 0 === ip || ip.send(xp.c.UpdateNameTag, pp)
        },
        setCustomLobbyBlock(pp) {
          let {
            pos: ip,
            blockName: cp
          } = pp;
          const Op = (0, Ip.u)(),
            op = (0, Ip.k)();
          Op && op && op.send(xp.c.SetCustomLobbyBlock, (0, xp.H)({
            tx: Op.blockIdOf(cp),
            vx: ip
          }))
        }
      }
  },
  40857: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Lp,
      f: () => Sp,
      i: () => xp
    });
    var Op = cp(40769),
      op = cp(4886),
      Ip = cp(40783);

    function Sp() {
      var pp;
      const ip = null === (pp = (0, Ip.k)()) || void 0 === pp ? void 0 : pp.api.localId;
      return void 0 === ip || ip === Op.Nc ? null : String(ip)
    }

    function xp(pp) {
      const ip = (0, Ip.k)();
      if (null !== ip) return pp(ip);
      let cp = null;
      const Op = (0, op.p)((() => {
        const ip = (0, Ip.k)();
        null !== ip && null === cp && (Op(), cp = pp(ip))
      }));
      return () => {
        var pp;
        Op(), null === (pp = cp) || void 0 === pp || pp()
      }
    }

    function Lp(pp, ip, cp) {
      return {
        current: () => {
          const cp = (0, Ip.k)();
          return null === cp ? ip : pp(cp)()
        },
        watch: ip => xp((Op => {
          const op = pp(Op);
          let Ip = op();
          return ip(Ip), cp((() => {
            const pp = op();
            pp !== Ip && (Ip = pp, ip(pp))
          }))
        }))
      }
    }
  },
  40849: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Yp
    });
    var Op = cp(40783),
      op = cp(40857),
      Ip = cp(40865);

    function Sp() {
      var pp, ip;
      return null !== (pp = null === (ip = (0, Op.k)()) || void 0 === ip ? void 0 : ip.itemBridgeSources) && void 0 !== pp ? pp : Ip.d
    }

    function xp(pp) {
      return {
        current: () => Sp().states[pp].current(),
        watch: ip => (0, op.i)((cp => {
          const Op = cp.itemBridgeSources.states[pp];
          return ip(Op.current()), Op.watch(ip)
        }))
      }
    }

    function Lp(pp) {
      return {
        watch: ip => (0, op.i)((cp => cp.itemBridgeSources.events[pp].watch(ip)))
      }
    }
    const Yp = {
      states: {
        inventory: xp("inventory"),
        hotbar: xp("hotbar"),
        crafting: xp("crafting"),
        heldItemAim: xp("heldItemAim")
      },
      events: {
        hotbarSlotRequested: Lp("hotbarSlotRequested"),
        hotbarScrolled: Lp("hotbarScrolled"),
        numberKeyPressed: Lp("numberKeyPressed"),
        inventoryDropRequested: Lp("inventoryDropRequested"),
        chestToggled: Lp("chestToggled"),
        chestRefreshed: Lp("chestRefreshed"),
        inventorySynced: Lp("inventorySynced"),
        enchantingTableOpened: Lp("enchantingTableOpened")
      },
      commands: {
        selectHotbarSlot: pp => Sp().commands.selectHotbarSlot(pp),
        removeInventoryItem: pp => Sp().commands.removeInventoryItem(pp),
        swapInventorySlots: pp => Sp().commands.swapInventorySlots(pp),
        moveInventoryItem: pp => Sp().commands.moveInventoryItem(pp),
        quickMoveInventoryItem: pp => Sp().commands.quickMoveInventoryItem(pp),
        closeChest: pp => Sp().commands.closeChest(pp),
        focusCrafting: pp => Sp().commands.focusCrafting(pp),
        craftRecipe: pp => Sp().commands.craftRecipe(pp),
        salvageItem: pp => Sp().commands.salvageItem(pp),
        enchantItem: pp => Sp().commands.enchantItem(pp)
      },
      queries: {
        enchantingOffer: pp => Sp().queries.enchantingOffer(pp)
      }
    }
  },
  40865: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => xp
    });
    var Op = cp(39842);

    function op(pp) {
      return {
        current: () => pp,
        watch: () => () => {}
      }
    }

    function Ip() {}
    const Sp = Object.freeze([0, 0, 0]),
      xp = {
        states: {
          health: op({
            health: null,
            maxHealth: null,
            shield: null,
            maxShield: null
          }),
          inventory: op({
            player: [],
            chestOrCreative: [],
            chest: null,
            creative: !1,
            selectedSlot: 0,
            freeSlots: 0
          }),
          hotbar: op({
            items: [],
            ammo: 0,
            selectedSlot: null
          }),
          stationItems: op({
            enchantable: {},
            salvageable: {}
          }),
          itemInfo: op({}),
          creativeVisibility: op({
            publicLobby: !1,
            shownInGame: {}
          }),
          aura: op(null),
          heldItemAim: op({
            gun: !1,
            aimable: !1,
            chargeName: null
          }),
          crouching: op(!1),
          gliderBoostFuel: op(0),
          flight: op({
            canFly: !1,
            flying: !1
          }),
          crafting: op({
            focus: null,
            recipes: [],
            detail: null
          }),
          players: op({
            ids: [],
            byId: {},
            localId: null
          }),
          lobbyLeaderboardRows: op({}),
          fullInventory: op(!1),
          crosshairTarget: op({
            interactPrompt: null,
            blockText: null,
            neededTool: null
          }),
          localPlayerAlive: op(!0),
          freeCamera: op({
            allowed: !1,
            movesFly: !1
          }),
          replay: op(null),
          replayEdits: op(null),
          replayRecorder: op({
            recording: !1,
            clipping: !1,
            hasClipBuffer: !1,
            seconds: 0
          }),
          replayVideoExporting: op(!1)
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
          selectHotbarSlot: Ip,
          removeInventoryItem: () => !1,
          swapInventorySlots: () => !1,
          moveInventoryItem: () => !1,
          quickMoveInventoryItem: () => null,
          closeChest: Ip,
          setInventoryOpen: Ip,
          changeIronChestPasskey: Ip,
          dragReplayCamera: Ip,
          applyTemporaryThirdPerson: Ip,
          holdEmoteWheel: Ip,
          recordFlyingMiddleText: Ip,
          focusCrafting: Ip,
          craftRecipe: () => ({
            gD: 0,
            eL: null,
            amountAddedToSlot: 0
          }),
          salvageItem: () => !1,
          enchantItem: Ip,
          setShopOpen: Ip,
          buyShopItem: Ip,
          lobbyManage: Ip,
          sendChatMessage: Ip,
          ignorePlayer: Ip,
          reportPlayer: Ip,
          reportWorldCodeChat: Ip,
          requestDiscordReportKey: Ip,
          reportLobbyOrGame: Ip,
          playEmote: Ip,
          updateMyCosmetic: Ip,
          writeOnBoard: Ip,
          writeBook: Ip,
          writeNameTag: Ip,
          setCustomLobbyBlock: Ip,
          openIronChest: Ip,
          sendCodeCollab: Ip,
          clickCodeBlock: Ip,
          bindCustomButtonKeys: Ip,
          pressCustomButton: Ip,
          moveReplayFreecam: Ip,
          holdReplayFreecamVertical: Ip,
          respawn: Ip,
          wakeUp: Ip,
          requestLeaderboard: Ip,
          completeTask: Ip,
          setServerCookie: Ip,
          answerUiRequest: Ip,
          chooseRewardedAd: Ip,
          setCameraZoom: Ip,
          setFreeCameraMovesFly: Ip,
          setBlockHighlight: Ip,
          setCrosshairInteractPrompt: Ip,
          setLookSensitivity: Ip,
          replayAction: Ip,
          setReplayPlaying: Ip,
          seekReplay: Ip,
          setReplayCameraMode: Ip,
          syncReplayCameraMode: Ip,
          setReplayCameraKeyframe: Ip,
          moveReplayCameraKeyframe: Ip,
          deleteReplayCameraKeyframes: Ip,
          setReplayPlaybackMark: Ip,
          cropReplay: () => !1,
          holdReplayForShaderPackFailure: Ip,
          exportReplayVideo: Ip,
          toggleRecording: Ip,
          saveClip: Ip,
          setRecorderPrefs: Ip,
          setReplayViewerOpen: Ip
        },
        queries: {
          enchantingOffer: () => ({
            perks: [],
            options: []
          }),
          worldCodeAiChunk: () => Op.c,
          worldCodeAiGameState: () => Op.g
        },
        lookups: {
          localPos: () => Sp,
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
  40778: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Rp,
      g: () => mp,
      j: () => qp,
      m: () => kp,
      o: () => ep
    });
    var Op = cp(39425),
      op = cp(1234),
      Ip = cp(1982),
      Sp = cp(1996),
      xp = cp(3400),
      Lp = cp(37019),
      Yp = cp(1349),
      Dp = cp(40783),
      Ap = cp(4927),
      Pp = cp(2457),
      Wp = cp(40792),
      yp = cp(40798),
      Up = cp(40849);
    let wp = null;

    function vp(pp) {
      const ip = new Map,
        cp = cp => {
          if ("string" !== typeof cp) return;
          let Op = ip.get(cp);
          return void 0 === Op && (Op = pp(cp), void 0 !== Op && ip.set(cp, Op)), Op
        };
      return new Proxy({}, {
        get: (pp, ip) => cp(ip),
        has: (pp, ip) => void 0 !== cp(ip)
      })
    }

    function tp(pp) {
      const ip = (0, xp.c)(pp);
      return void 0 !== ip && (0, xp.d)(ip) === pp
    }

    function Hp(pp) {
      var ip;
      const cp = null === (ip = (0, Dp.k)()) || void 0 === ip ? void 0 : ip.tables;
      if (void 0 === cp || !tp(pp)) return;
      const Op = {
          displayName: cp.getDisplayName(pp)
        },
        op = cp.getItemStat(pp, "description");
      void 0 !== op && null !== op && (Op.description = op);
      const {
        rootName: Ip
      } = cp.getMetaInfo(pp);
      Ip !== pp && (Op.rootName = Ip);
      const Sp = cp.getItemStat(pp, "armourReduction");
      return void 0 !== Sp && null !== Sp && (Op.armourReduction = Sp), Op
    }(0, Dp.y)((pp => {
      wp = pp
    }));
    const dp = (0, Sp.i)("DisplayName", "Description");

    function ep() {
      return Boolean(Ip.c.get("useInventory") && Ip.c.get("useFullInventory"))
    }
    let jp = null;
    const kp = {
        inventory: function() {
          const pp = Up.e.states.inventory;
          let ip = null;
          const cp = pp => {
            var cp;
            return null === pp.chest ? pp : ((null === (cp = ip) || void 0 === cp ? void 0 : cp.from) === pp && ip.chestVersion === (0, yp.b)() || (ip = {
              from: pp,
              chestVersion: (0, yp.b)(),
              view: {
                ...pp,
                chest: (0, yp.h)(pp.chest)
              }
            }), ip.view)
          };
          return {
            current: () => cp(pp.current()),
            watch: ip => pp.watch((pp => {
              ip(cp(pp))
            }))
          }
        }(),
        crafting: Up.e.states.crafting,
        stationItems: {
          current() {
            var pp;
            return (null === (pp = jp) || void 0 === pp ? void 0 : pp.namesVersion) !== (0, xp.g)() && (jp = {
              namesVersion: (0, xp.g)(),
              items: {
                enchantable: vp((pp => {
                  const ip = (0, xp.c)(pp);
                  return void 0 !== ip && null !== wp && wp.enchantmentPerksOf(ip).length > 0 || void 0
                })),
                salvageable: vp((pp => !(!tp(pp) || null === (0, Lp.b)(pp)) || void 0))
              }
            }), jp.items
          },
          watch: () => () => {}
        },
        itemInfo: function() {
          let pp = null;
          const ip = () => {
            var ip;
            return (null === (ip = pp) || void 0 === ip ? void 0 : ip.namesVersion) !== (0, xp.g)() && (pp = {
              namesVersion: (0, xp.g)(),
              infos: vp(Hp)
            }), pp.infos
          };
          return {
            current: ip,
            watch: cp => (0, Sp.v)((Op => {
              Op.some(dp) && (pp = null, cp(ip()))
            }))
          }
        }(),
        creativeVisibility: (0, Sp.p)((function() {
          const pp = {};
          for (const op of null !== (ip = null === (cp = wp) || void 0 === cp ? void 0 : cp.creativeItemIds()) && void 0 !== ip ? ip : []) {
            var ip, cp, Sp, Lp;
            const Yp = (0, xp.d)(op);
            if (void 0 === Yp) continue;
            const Dp = null !== (Sp = Ip.c.get((0, Op.d)(Yp, "showInCreativeInven"))) && void 0 !== Sp ? Sp : null === (Lp = wp) || void 0 === Lp ? void 0 : Lp.showInCreativeInvenOf(op);
            "boolean" === typeof Dp && (pp[Yp] = Dp)
          }
          return {
            publicLobby: (0, op.I)((0, Yp.d)().lobbyName),
            shownInGame: pp
          }
        }), ["connectedGameChanged"], (0, Sp.i)("ShowInCreativeInven")),
        fullInventory: (0, Sp.p)(ep, [], (0, Sp.l)("useInventory", "useFullInventory"))
      },
      mp = {
        inventoryDropRequested: Up.e.events.inventoryDropRequested,
        chestToggled: Up.e.events.chestToggled,
        chestRefreshed: Up.e.events.chestRefreshed,
        inventorySynced: Up.e.events.inventorySynced,
        enchantingTableOpened: Up.e.events.enchantingTableOpened
      },
      Rp = {
        removeInventoryItem: Up.e.commands.removeInventoryItem,
        swapInventorySlots: Up.e.commands.swapInventorySlots,
        moveInventoryItem: Up.e.commands.moveInventoryItem,
        quickMoveInventoryItem: Up.e.commands.quickMoveInventoryItem,
        closeChest: Up.e.commands.closeChest,
        setInventoryOpen(pp) {
          (0, Ap.g)(Pp.C.InventoryOpen, pp ? Pp.C.InventoryOpen : 0)
        },
        focusCrafting: Up.e.commands.focusCrafting,
        craftRecipe: Up.e.commands.craftRecipe,
        salvageItem: Up.e.commands.salvageItem,
        enchantItem: Up.e.commands.enchantItem,
        changeIronChestPasskey(pp) {
          var ip;
          let {
            pos: cp,
            Zx: Op
          } = pp;
          null === (ip = (0, Dp.k)()) || void 0 === ip || ip.send(Wp.c.ChangeIronChestPasskey, (0, Wp.h)({
            WI: cp,
            Zx: Op
          }))
        },
        openIronChest(pp) {
          var ip;
          let {
            pos: cp,
            Zx: Op
          } = pp;
          null === (ip = (0, Dp.k)()) || void 0 === ip || ip.send(Wp.c.OpenIronChest, (0, Wp.A)({
            WI: cp,
            Zx: Op
          }))
        }
      },
      qp = {
        enchantingOffer: Up.e.queries.enchantingOffer
      }
  },
  40842: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Op,
      d: () => Dp,
      f: () => Sp,
      g: () => op,
      i: () => xp,
      l: () => Yp
    });
    class Op extends Error {
      constructor() {
        super(...arguments), this.name = "CoreCorruption"
      }
    }

    function op(pp) {
      return pp instanceof RangeError && /call stack/i.test(pp.message) || pp instanceof Error && "InternalError" === pp.name && /recursion/i.test(pp.message)
    }
    const Ip = /wasm:\/\/|wasm-function\[|\[wasm code\]/;

    function Sp(pp) {
      var ip;
      return pp instanceof WebAssembly.RuntimeError || pp instanceof Op || op(pp) && Ip.test(null !== (ip = pp.stack) && void 0 !== ip ? ip : "")
    }

    function xp(pp, ip) {
      if (Sp(pp)) throw pp;
      console.error(ip, pp)
    }

    function Lp(pp, ip, cp, op, Ip) {
      if (ip % op !== 0 || ip + cp > pp.byteLength) throw new Op(`${Ip}: ${cp} bytes at ${ip}, ${op}-aligned, outside ${pp.byteLength} bytes of memory`)
    }

    function Yp(pp, ip, cp, Op, op) {
      return 0 === cp ? null : (Lp(ip, cp, Op * pp.BYTES_PER_ELEMENT, pp.BYTES_PER_ELEMENT, op), new pp(ip, cp, Op))
    }

    function Dp(pp, ip, cp, Op, op) {
      return 0 === ip ? null : (Lp(pp, ip, cp, Op, op), new DataView(pp, ip, cp))
    }
  },
  40783: (pp, ip, cp) => {
    cp.d(ip, {
      C: () => yp,
      e: () => Op,
      i: () => vp,
      k: () => Up,
      n: () => wp,
      o: () => Pp,
      q: () => Wp,
      u: () => Dp,
      y: () => Ap
    });
    class Op extends Error {
      constructor(pp) {
        super(`the join's code did not load: ${pp instanceof Error?pp.message:String(pp)}`, {
          cause: pp
        }), this.request = void 0, this.name = "GameCodeLoadError", this.request = null === pp || void 0 === pp ? void 0 : pp.request
      }
    }
    let op = null,
      Ip = null,
      Sp = null;
    const xp = [];
    let Lp = null;

    function Yp(pp, ip) {
      try {
        pp(ip)
      } catch (cp) {
        console.error("[bloxd-wasm-client] the game chunk's listener failed", cp)
      }
    }

    function Dp() {
      return Lp
    }

    function Ap(pp) {
      xp.push(pp), null !== Lp && Yp(pp, Lp)
    }

    function Pp(pp) {
      return op ??= Promise.all([cp.e(73), cp.e(98), cp.e(226), cp.e(78), cp.e(227), cp.e(201), cp.e(97), cp.e(246), cp.e(273), cp.e(199), cp.e(214), cp.e(191), cp.e(198), cp.e(193), cp.e(144), cp.e(88), cp.e(122), cp.e(252), cp.e(57)]).then((() => cp(42870))).then((ip => {
        ip.loadAudio(pp), Lp = ip;
        for (const pp of xp) Yp(pp, ip);
        return ip
      })).catch((pp => {
        throw op = null, pp
      })), op
    }
    async function Wp(pp, ip) {
      try {
        const cp = await Pp(pp);
        await cp.loadClientGame(ip)
      } catch (cp) {
        throw new Op(cp)
      }
    }

    function yp(pp, ip) {
      Ip = {
        running: pp,
        shell: ip
      }
    }

    function Up() {
      return Sp
    }
    async function wp(pp) {
      const ip = Ip;
      if ((null === ip || void 0 === ip ? void 0 : ip.running) !== pp) throw new Error("the core's session has ended");
      const cp = await Pp(ip.shell.audio).catch((pp => {
        throw new Op(pp)
      }));
      if (null !== Sp) return Sp;
      if (Ip !== ip || pp.isStopped) throw new Error("the core stopped while the game code loaded");
      if (Sp = cp.startGameHost(pp, ip.shell), null === Sp) throw new Error("the core's shared tables didn't read, so the game can't start");
      return Sp
    }

    function vp() {
      null !== Sp && (null !== Lp ? Lp.endGameHost(Sp) : Sp.closeGame()), Sp = null, Ip = null
    }
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);