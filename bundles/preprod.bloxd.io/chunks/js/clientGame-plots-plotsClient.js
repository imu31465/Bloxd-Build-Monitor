export const id = 22;
export const ids = [22];
export const modules = {
  36791: (pp, ip, cp) => {
    cp.d(ip, {
      d: () => Wp,
      h: () => yp,
      i: () => Pp,
      k: () => Ap
    });
    var Op = cp(34430),
      op = cp(36799),
      Ip = cp(36804),
      Sp = cp(8852),
      xp = cp(1476),
      Lp = cp(62),
      Yp = cp(82),
      Dp = cp(1112);

    function Ap() {
      var pp;
      return (0, xp.i)(op.d, (0, op.s)()), (0, Dp.jsx)(Dp.Fragment, {
        children: null === (pp = (0, op.s)()) || void 0 === pp ? void 0 : pp.content
      })
    }

    function Pp(pp) {
      var ip;
      let {
        show: cp
      } = pp;
      (0, xp.i)(op.d, (0, op.s)());
      const Yp = null === (ip = (0, op.s)()) || void 0 === ip ? void 0 : ip.menu;
      return (0, Lp.useEffect)((() => {
        var pp;
        cp || (null === Yp || void 0 === Yp || null === (pp = Yp.onClose) || void 0 === pp || pp.call(Yp), (0, Ip.q)())
      }), [cp, Yp]), (0, Lp.useEffect)((() => cp ? (0, Sp.e)(Ip.A, Ip.d) : void 0), [cp]), (0, Dp.jsx)(Op.b, {
        showing: cp,
        globallyUniqueKey: "clientGameMenu",
        children: null === Yp || void 0 === Yp ? void 0 : Yp.content
      })
    }

    function Wp(pp) {
      let {
        placement: ip = "bottom"
      } = pp;
      return (0, Dp.jsx)("div", {
        id: `clientGameHud-${ip}`,
        style: {
          display: "contents"
        }
      })
    }

    function yp(pp) {
      let {
        children: ip,
        placement: cp = "bottom"
      } = pp;
      const [Op, op] = (0, Lp.useState)(null);
      return (0, Lp.useEffect)((() => {
        op(document.getElementById(`clientGameHud-${cp}`))
      }), [cp]), Op ? (0, Yp.createPortal)(ip, Op) : null
    }
  },
  34430: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip
    });
    var Op = cp(4628),
      op = cp(4635);

    function Ip(pp) {
      let {
        children: ip,
        showing: cp,
        globallyUniqueKey: Ip,
        alwaysMountChildren: Sp = !1,
        doGameplayStartStopOnShow: xp = !0,
        keepsMovement: Lp = !1
      } = pp;
      return (0, op.e)(!0, cp, Ip, Lp), (0, Op.d)(xp, cp), cp || Sp ? ip : null
    }
  },
  36879: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Ip,
      h: () => Sp,
      l: () => xp,
      m: () => Lp
    });
    var Op = cp(62),
      op = cp(3209);
    const Ip = 8,
      Sp = "InGameHeaderContainer",
      xp = "TopRightElements";

    function Lp(pp) {
      const [ip] = (0, op.b)(), [cp, Lp] = (0, Op.useState)(!1);
      return (0, Op.useLayoutEffect)((() => {
        if (!pp) return;
        const ip = document.querySelector(`.${Sp}`),
          cp = document.querySelector(`.${xp}`),
          Op = () => {
            const Op = pp.getBoundingClientRect(),
              op = ip ? ip.getBoundingClientRect().right : 0,
              Sp = cp ? cp.getBoundingClientRect().left : window.innerWidth,
              xp = Op.left < op + Ip,
              Yp = Op.right > Sp - Ip;
            Lp(xp || Yp)
          };
        Op();
        const op = new ResizeObserver(Op);
        return op.observe(pp), ip && op.observe(ip), cp && op.observe(cp), () => {
          op.disconnect()
        }
      }), [pp, ip]), cp
    }
  },
  8852: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Ip,
      e: () => op
    });
    let Op = null;
    const op = function(pp) {
        const ip = {
          cycle: pp,
          canCycle: arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0
        };
        return Op = ip, () => {
          Op === ip && (Op = null)
        }
      },
      Ip = () => {
        var pp;
        return null !== (pp = Op) && void 0 !== pp && pp.canCycle() ? Op.cycle : null
      }
  },
  38736: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp,
      e: () => xp,
      i: () => Lp
    });
    const Op = [1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, -1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1, 1, 1, -1, 1, -1, 1, 1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, -1, -1, -1, -1, -1, 1],
      op = [0, 1, 2, 0, 2, 3],
      Ip = [4, 5];

    function Sp(pp, ip, cp, Op, op) {
      for (let Sp = 0; Sp < 6; Sp++) Ip.includes(Sp) === op && Yp(pp, ip, cp, Op, Sp)
    }

    function xp(pp, ip, cp, Op) {
      for (let op = 0; op < 6; op++) Yp(pp, ip, cp, Op, op)
    }

    function Lp(pp, ip, cp, Ip, Sp) {
      for (let xp = 0; xp < 6; xp++)
        for (const Lp of [0, 1]) {
          const [Yp, Dp, Ap] = [Lp + 2, Lp + 1, (Lp + 3) % 4], Pp = pp.length / 3;
          for (const [ip, op] of [
              [Lp, Dp],
              [Yp, Dp],
              [Yp, Ap],
              [Lp, Ap]
            ])
            for (let Lp = 0; Lp < 3; Lp++) {
              const Yp = Op[3 * (4 * xp + ip) + Lp],
                Dp = Op[3 * (4 * xp + op) + Lp];
              pp.push((Yp + (Dp - Yp) * Sp) * Ip / 2 + cp[Lp])
            }
          for (const pp of op) ip.push(Pp + pp)
        }
    }

    function Yp(pp, ip, cp, Ip, Sp) {
      let [xp, Lp, Yp] = cp, [Dp, Ap, Pp] = Ip;
      const Wp = pp.length / 3;
      for (let op = 4 * Sp; op < 4 * Sp + 4; op++) pp.push(Op[3 * op] * Dp / 2 + xp, Op[3 * op + 1] * Ap / 2 + Lp, Op[3 * op + 2] * Pp / 2 + Yp);
      for (const Op of op) ip.push(Wp + Op)
    }
  },
  39655: (pp, ip, cp) => {
    cp.r(ip), cp.d(ip, {
      default: () => MO
    });
    const Op = [0, 90, 180, 270],
      op = "plotsblueprint";
    var Ip = cp(62),
      Sp = cp(36799),
      xp = cp(25),
      Lp = cp(1476),
      Yp = cp(2012),
      Dp = cp(1201),
      Ap = cp(1049),
      Pp = cp.n(Ap),
      Wp = cp(1650),
      yp = cp(36791),
      Up = cp(1060),
      wp = cp(1941),
      vp = cp(2007),
      tp = cp(3523),
      Hp = cp(1765);

    function dp() {}
    const ep = (0, Ip.createContext)({
      hint: null,
      journalRef: dp,
      placementCardRef: dp,
      buildRef: dp
    });
    var jp = cp(34);
    const kp = [
        ["farm_hut", "farm_house", "farm_barn"],
        ["rusticHome_tent", "rusticHome_cabin", "rusticHome_house"],
        ["market_stand", "market_stall", "market_shop"],
        ["castle_wall", "castle_gate", "castle_tower"]
      ],
      mp = {
        farm_hut: {
          displayName: {
            translationKey: "plotsGame:blueprintFarmHut"
          },
          tier: "small"
        },
        farm_house: {
          displayName: {
            translationKey: "plotsGame:blueprintFarmHouse"
          },
          tier: "medium"
        },
        farm_barn: {
          displayName: {
            translationKey: "plotsGame:blueprintFarmBarn"
          },
          tier: "large"
        },
        rusticHome_tent: {
          displayName: {
            translationKey: "plotsGame:blueprintRusticHomeTent"
          },
          tier: "small"
        },
        rusticHome_cabin: {
          displayName: {
            translationKey: "plotsGame:blueprintRusticHomeCabin"
          },
          tier: "medium"
        },
        rusticHome_house: {
          displayName: {
            translationKey: "plotsGame:blueprintRusticHomeHouse"
          },
          tier: "large"
        },
        market_stand: {
          displayName: {
            translationKey: "plotsGame:blueprintMarketStand"
          },
          tier: "small"
        },
        market_stall: {
          displayName: {
            translationKey: "plotsGame:blueprintMarketStall"
          },
          tier: "medium"
        },
        market_shop: {
          displayName: {
            translationKey: "plotsGame:blueprintMarketShop"
          },
          tier: "large"
        },
        castle_wall: {
          displayName: {
            translationKey: "plotsGame:blueprintCastleWall"
          },
          tier: "small"
        },
        castle_gate: {
          displayName: {
            translationKey: "plotsGame:blueprintCastleGate"
          },
          tier: "large"
        },
        castle_tower: {
          displayName: {
            translationKey: "plotsGame:blueprintCastleTower"
          },
          tier: "large"
        }
      },
      Rp = ["small", "medium", "large"].flatMap((pp => kp.flat().filter((ip => mp[ip].tier === pp))));

    function qp(pp) {
      return mp[pp]
    }
    const Mp = new Map(kp.flatMap((pp => pp.slice(1).map(((ip, cp) => [ip, pp[cp]])))));

    function Cp(pp) {
      var ip;
      return null !== (ip = Mp.get(pp)) && void 0 !== ip ? ip : null
    }
    const Ep = {
      farm_hut: {
        key: "plotsGame:journalNoteFarmHut",
        firstBuild: !0
      },
      rusticHome_tent: {
        key: "plotsGame:journalNoteRusticHomeTent",
        firstBuild: !1
      },
      castle_tower: {
        key: "plotsGame:journalNoteCastleTower",
        firstBuild: !1
      },
      farm_house: {
        key: "plotsGame:journalNoteFarmHouse",
        firstBuild: !1
      },
      farm_barn: {
        key: "plotsGame:journalNoteFarmBarn",
        firstBuild: !1
      }
    };

    function Xp(pp, ip) {
      const cp = new Set(pp),
        Op = function(pp) {
          const ip = new Set(pp);
          return new Set(Rp.filter((pp => {
            const cp = Cp(pp);
            return null === cp || ip.has(cp)
          })))
        }(cp);
      return Rp.map((pp => {
        const op = pp === ip;
        if (cp.has(pp)) return {
          id: pp,
          active: op,
          note: null,
          state: "completed",
          unlockedBy: null
        };
        const Ip = Ep[pp],
          Sp = void 0 === Ip || Ip.firstBuild && cp.size > 0 ? null : Ip.key;
        return Op.has(pp) ? {
          id: pp,
          active: op,
          note: Sp,
          state: "open",
          unlockedBy: null
        } : {
          id: pp,
          active: op,
          note: Sp,
          state: "locked",
          unlockedBy: Cp(pp)
        }
      }))
    }
    const lp = "plotsJournalChanged";
    class Qp {
      constructor(pp, ip) {
        this.api = pp, this.placement = ip, this.pages = null, this.openRequested = null, this.openedOffered = !1, this.reported = new Set, this.onOpened = () => {
          this.placement.stop(), this.Yy(this.openedOffered ? "journal_offered" : "journal_opened"), this.openedOffered = !1
        }, this.build = pp => {
          this.placement.start(pp), (0, Sp.h)()
        }, this.putAway = () => {
          this.api.sendCommand(`${op} cancel`)
        }
      }
      getPages() {
        return this.pages
      }
      Ey(pp) {
        let [, ip, cp] = pp;
        this.pages = Xp(ip, cp), jp.m.GA(lp, this.pages, !0)
      }
      openFromServer(pp) {
        let [, ip] = pp;
        this.openRequested = ip, this.LP()
      }
      LP() {
        const pp = this.openRequested;
        null === pp || xp.c.get("loadingOverlayVisible") || (this.openRequested = null, null === this.pages || (0, Wp.l)() || (0, Hp.isTypingInInput)() || null !== this.placement.getView() || (this.openedOffered = pp, (0, Sp.t)()))
      }
      Yy(pp) {
        this.reported.has(pp) || (this.reported.add(pp), this.api.sendCommand(`${op} report ${pp}`))
      }
    }
    var Jp = cp(1112);
    const Bp = "KeyJ";

    function Np(pp) {
      let {
        journal: ip
      } = pp;
      const cp = (0, Lp.i)(lp, ip.getPages()),
        {
          isTouchScreen: Op
        } = (0, xp.o)(["isTouchScreen"]),
        {
          t: op
        } = (0, Dp.H)(),
        Yp = (0, Ip.useContext)(ep);
      return (0, tp.b)((pp => null !== cp && pp.code === Bp && !pp.repeat && !(0, Hp.isTypingInInput)()), (pp => {
        (0, Wp.v)(pp, !0, Sp.t)
      })), null === cp ? null : (0, Jp.jsx)(yp.h, {
        placement: "topRight",
        children: (0, Jp.jsx)("div", {
          className: "PlotsJournalButtonContainer",
          children: (0, Jp.jsxs)("button", {
            ref: Yp.journalRef,
            type: "button",
            className: Pp()("PlotsJournalButton SmallTextBold", {
              Touch: Op
            }),
            onClick: Sp.t,
            children: [(0, Jp.jsx)("span", {
              className: "PlotsJournalButtonIcon",
              children: (0, Jp.jsx)(wp.d, {
                itemName: "Book",
                amount: 0
              })
            }), op("plotsGame:journalButton"), !Op && (0, Jp.jsx)(vp.d, {
              className: "PlotsJournalButtonKey",
              keyCode: Bp
            }), "openJournal" === Yp.hint && (0, Jp.jsx)(Up.d, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon HandLeftAnim PlotsJournalButtonHand"
            })]
          })
        })
      })
    }
    var Tp = cp(9338);
    const fp = [0, 90, 180, 270],
      bp = /^(meta\|rot\d)\|([lrud]+)$/,
      hp = "nesw",
      ap = /^meta\|([nesw]*)\|?(Stacked)?$/,
      np = function(pp) {
        const ip = new WeakMap;
        return (cp, Op) => {
          let op = ip.get(cp);
          return void 0 === op && (op = pp(cp, Op), ip.set(cp, op)), op
        }
      }((pp => new Fp(pp)));
    class Fp {
      constructor(pp) {
        this.blockMetadata = pp, this.blockIdMappings = new Map, this.maxBlockId = void 0;
        const ip = new Set(Object.keys(pp).map((ip => pp[ip].id)));
        ip.add(0), this.maxBlockId = Math.max(...ip)
      }
      static
      for (pp) {
        return np(pp)
      }
      getBlockIdMapping(pp, ip) {
        const cp = this.getBlockIdMappingKey(pp, ip);
        let Op = this.blockIdMappings.get(cp);
        return void 0 === Op && fp.includes(pp) && (Op = this.createBlockIdMapping(this.blockMetadata, this.maxBlockId, pp, ip), this.blockIdMappings.set(cp, Op)), Op
      }
      turnBlockId(pp, ip, cp) {
        return this.mapBlockId(this.blockMetadata[pp], ip, this.getRotationMapping(ip, cp), cp)
      }
      getBlockIdMappingKey(pp, ip) {
        return `r${pp}|m${Number(ip)}`
      }
      createBlockIdMapping(pp, ip, cp, Op) {
        const op = new Uint16Array(ip + 1),
          Ip = this.getRotationMapping(cp, Op);
        for (const Sp in pp) {
          const ip = pp[Sp];
          op[ip.id] = this.mapBlockId(ip, cp, Ip, Op)
        }
        return op
      }
      getRotationMapping(pp, ip) {
        const cp = Math.round(pp / 90),
          Op = new Uint8Array(4);
        for (let op = 0; op < 4; op++) Op[op] = (4 + op - cp) % 4;
        if (ip) {
          let pp = Op[0];
          Op[0] = Op[1], Op[1] = pp, pp = Op[2], Op[2] = Op[3], Op[3] = pp
        }
        return Op
      }
      mapBlockId(pp, ip, cp, Op) {
        var op;
        const {
          blockMetadata: Ip
        } = this, Sp = Math.round(ip / 90), {
          id: xp,
          meta: Lp
        } = pp, {
          rot: Yp,
          rootName: Dp,
          metaStr: Ap
        } = Lp;
        let Pp;
        const [, Wp, yp] = null !== (op = ap.exec(Ap)) && void 0 !== op ? op : [];
        if (void 0 !== Wp) {
          var Up, wp;
          Pp = null !== (Up = null === (wp = Ip[`${Dp}|meta|${[hp.split("").filter(((pp,ip)=>Wp.split("").some((pp=>{const cp=hp.indexOf(pp);return((Op?3-cp:cp)+Sp)%4===ip})))).join(""),yp].filter(Boolean).join("|")}`]) || void 0 === wp ? void 0 : wp.id) && void 0 !== Up ? Up : xp
        } else if (null === Yp) Pp = xp;
        else {
          var vp, tp;
          const pp = cp[Yp - 1] + 1;
          let ip = Ap.replace(`rot${Yp}`, `rot${pp}`);
          Op && Lp.stairsCorner && (ip = ip.replace(/(Left|Right)$/, (pp => "Left" === pp ? "Right" : "Left"))), Op && "Chest" === Dp && (ip = ip.replace(/\|(left|right)$/, ((pp, ip) => "left" === ip ? "|right" : "|left")));
          const op = bp.exec(ip);
          if (Op && null !== op) {
            const pp = "lrud".split("").filter((pp => op[2].includes("l" === pp ? "r" : "r" === pp ? "l" : pp)));
            ip = `${op[1]}|${pp.join("")}`
          }
          const Sp = `${Dp}|${ip}`;
          if (Pp = null !== (vp = null === (tp = Ip[Sp]) || void 0 === tp ? void 0 : tp.id) && void 0 !== vp ? vp : null, null === Pp) {
            const pp = Ip[Dp];
            Pp = pp.rootMetaDesc === Sp ? pp.id : xp
          }
        }
        return Pp
      }
    }

    function gp(pp, ip, cp) {
      let {
        xRotationMappedOrigin: Op,
        shouldSwapXZ: op
      } = cp;
      const Ip = op ? ip : pp;
      return null === Op ? Ip : Op - Ip
    }

    function Gp(pp, ip, cp) {
      let {
        zRotationMappedOrigin: Op,
        shouldSwapXZ: op
      } = cp;
      const Ip = op ? pp : ip;
      return null === Op ? Ip : Op - Ip
    }
    const rp = {
        farm_hut: {
          size: [7, 7, 7],
          palette: ["Aspen Wood Planks", "Messy Stone", "Barkless Aspen Log", "Red Planks", "Glass", "Barkless Pine Log", "Maple Wood Planks", "Smooth Stone"],
          layers: ["....... .cbhbc. .bgggb. .bgggb. .bgggb. .cbbbc. .......", "....... .cd.dc. .d...d. .d...d. .d...d. .cdddc. .......", "....... .cd.dc. .d...d. .e...d. .d...d. .cdddc. .......", "aa...aa bfdadfb bd...db bd...db bd...db bfdddfb aa...aa", ".aa.aa. .bbdbb. .bb.bb. .bb.bb. .bb.bb. .bbdbb. .aa.aa.", "..aaa.. ..bbb.. ..bbb.. ..bbb.. ..bbb.. ..bbb.. ..aaa..", "...a... ...b... ...b... ...b... ...b... ...b... ...a..."]
        },
        rusticHome_tent: {
          size: [7, 6, 7],
          palette: ["Barkless Pine Log", "White Wool", "Pine Wood Planks"],
          layers: ["a..a..a b.....b b.....b b.....b b.....b b.....b a..a..a", "a..a..a b.....b b.....b b.....b b.....b b.....b a..a..a", "cc.a.cc b.....b b.....b b.....b b.....b b.....b cc.a.cc", ".ccacc. .b...b. .b...b. .b...b. .b...b. .b...b. .ccacc.", "..ccc.. ..b.b.. ..b.b.. ..b.b.. ..b.b.. ..b.b.. ..ccc..", "...c... ...b... ...b... ...b... ...b... ...b... ...c..."]
        },
        market_stand: {
          size: [7, 4, 4],
          palette: ["Barkless Pine Log", "Pine Wood Planks", "White Wool", "Green Wool"],
          layers: ["a.bbbba ....... ....... acdcdca", "a.....a ....... ....... acdcdca", "a.....a ....... ....... acdcdca", "bcdcdcb bcdcdcb bcdcdcb bcdcdcb"]
        },
        castle_wall: {
          size: [8, 7, 2],
          palette: ["Smooth Stone", "Stone Bricks", "Maple Wood Planks"],
          layers: ["aaaaaaaa aaaaaaaa", "bbbbbbbb bbbbbbbb", "bbbbbbbb bbbbbbbb", "bbbbbbbb bbbbbbbb", "cccccccc bbbbbbbb", "........ bbbbbbbb", "........ bb.bb.bb"]
        },
        farm_house: {
          size: [13, 10, 11],
          palette: ["Aspen Wood Planks", "Messy Stone", "Stone Bricks", "Smooth Stone", "Barkless Aspen Log", "Red Planks", "Maple Wood Planks", "Glass"],
          layers: ["............. .cbbdbbc..dcd .bgggggb....c .bgggggb....c .bgggggb....c .bgggggb....c .bgggggb....c .bgggggb....c .bgggggb....c .cbbbbbcccccd .............", "............. .dbb.bbd..... .b.....b..... .b.....b..... .b.....b..... .b.....b..... .b.....b..... .b........... .b.....b..... .dbbbbbd..... .............", "............. .eff.ffe..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f........... .f.....f..... .effhffe..... .............", "............. .effaffe..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f.....a..... .f.....f..... .effhffe..... .............", "............. .efffffe..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .f.....f..... .effaffe..... .............", "aa.....aa.... beaaaaaeb.... ba.....ab.... ba.....ab.... ba.....ab.... ba.....ab.... ba.....ab.... ba.....ab.... ba.....ab.... beaaaaaeb.... aa.....aa....", ".aa...aa..... .bfffffb..... .b.....b..... .b.....b..... .b.....b..... .b.....b..... .b.....b..... .b.....b..... .b.....b..... .bfffffb..... .aa...aa.....", "..aa.aa...... ..bfffb...... ..b...b...... ..b...b...... ..b...b...... ..b...b...... ..b...b...... ..b...b...... ..b...b...... ..bfffb...... ..aa.aa......", "...aaa....... ...bfb....... ...b.b....... ...b.b....... ...b.b....... ...b.b....... ...b.b....... ...b.b....... ...b.b....... ...bfb....... ...aaa.......", "....a........ ....b........ ....b........ ....b........ ....b........ ....b........ ....b........ ....b........ ....b........ ....b........ ....a........"]
        },
        rusticHome_cabin: {
          size: [11, 10, 11],
          palette: ["Pine Wood Planks", "Messy Stone", "Barkless Pine Log", "Maple Wood Planks", "Glass"],
          layers: ["........... .cbbbcbbbc. .bdddddddb. .bdddddddb. .bdddddddb. .cdddddddc. .bdddddddb. .bdddddddb. .bdddddddb. .cbbbcbbbc. ...........", "........... .cb.bcbbbc. .b.......b. .b.......b. .b.......b. .c.......c. .b.......b. .b.......b. .b.......b. .cbbbcbbbc. ...........", "........... .cd.dcdedc. .d.......d. .d.......d. .d.......d. .c.......c. .d.......d. .d.......d. .d.......d. .cdedcdedc. ...........", "........... .cdddcdddc. .d.......d. .d.......d. .d.......d. .c.......c. .d.......d. .d.......d. .d.......d. .cdddcdddc. ...........", "aa.......aa baaaaaaaaab ba.......ab ba.......ab ba.......ab aa.......aa ba.......ab ba.......ab ba.......ab baaaaaaaaab aa.......aa", ".aa.....aa. .bdddcdddb. .b.......b. .b.......b. .b.......b. .a.......a. .b.......b. .b.......b. .b.......b. .bdddcdddb. .aa.....aa.", "..aa...aa.. ..bddcddb.. ..b.....b.. ..b.....b.. ..b.....b.. ..a.....a.. ..b.....b.. ..b.....b.. ..b.....b.. ..bddcddb.. ..aa...aa..", "...aa.aa... ...bdcdb... ...b...b... ...b...b... ...b...b... ...a...a... ...b...b... ...b...b... ...b...b... ...bdcdb... ...aa.aa...", "....aaa.... ....bcb.... ....b.b.... ....b.b.... ....b.b.... ....a.a.... ....b.b.... ....b.b.... ....b.b.... ....bcb.... ....aaa....", ".....a..... .....b..... .....b..... .....b..... .....b..... .....a..... .....b..... .....b..... .....b..... .....b..... .....a....."]
        },
        market_stall: {
          size: [11, 8, 9],
          palette: ["Pine Wood Planks", "Barkless Pine Log", "Messy Stone", "Maple Wood Planks", "Orange Planks", "White Wool", "Orange Wool"],
          layers: ["..bcccccb.. ..cdddddc.. ..cdddddc.. .bcdddddcb. .cdddddddc. .cdddddddc. .cdddddddc. .bcccccccb. ...........", "..b.....b.. ........... ........... .bdddddddb. .d.......d. .d......... .d.......d. .bdddddddb. ...........", "..b.....b.. ........... ........... .bd.....db. .d.......d. .d......... .d.......d. .bdddddddb. ...........", "..b.....b.. ........... ........... .bdaaaaadb. .d.......d. .d.......a. .d.......d. .bdddddddb. ...........", "..afgfgfa.. ..afgfgfa.. aeafgfgfaea abdddddddba .ddddddddd. .ddddddddd. .ddddddddd. abdddddddba aeeeeeeeeea", "........... ........... ........... aeeeeeeeeea ad.......da .d.......d. ad.......da aeeeeeeeeea ...........", "........... ........... ........... ........... aeeeeeeeeea ad.......da aeeeeeeeeea ........... ...........", "........... ........... ........... ........... ........... aeeeeeeeeea ........... ........... ..........."]
        },
        farm_barn: {
          size: [21, 13, 17],
          palette: ["Smooth Stone", "Stone Bricks", "Aspen Wood Planks", "Messy Stone", "Barkless Aspen Log", "Red Planks", "Glass", "Maple Wood Planks", "Maple Ladder|meta|rot3"],
          layers: ["..................... aba..bbbbbabbbbb..aba b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b b....bhhhhhhhhhb....b aba..bbbbbbbbbbb..aba .....................", "..................... .....aaaaa.aaaaa..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a.........a..... .....a....i....a..... .....aaaaaaaaaaa..... .....................", "..................... .....effef.feffe..... .....f.........f..... .....f.........f..... .....f.........f..... .....f.........f..... .....e.........e..... .....f.........f..... .....g.........g..... .....f.........f..... .....e.........e..... .....f.........f..... .....f.........f..... .....f.........f..... .....f....i....f..... .....effefffeffe..... .....................", "..................... .....effefcfeffe..... .....f.........f..... .....f.........f..... .....f.........f..... .....f.........f..... .....e.........e..... .....f.........f..... .....g.........g..... .....f.........f..... .....e.........e..... .....f.........f..... .....f.........f..... .....f.........f..... .....f....i....f..... .....effefffeffe..... .....................", "..................... .....effefffeffe..... .....f.........f..... .....f.........f..... .....f.........f..... .....f.........f..... .....e.........e..... .....f.........f..... .....c.........c..... .....f.........f..... .....e.........e..... .....f.........f..... .....f.........f..... .....f.........f..... .....f....i....f..... .....effefffeffe..... .....................", "..................... .....effefffeffe..... .....f.........f..... .....f.........f..... .....f.........f..... .....f.........f..... .....ecccccccccc..... .....f.........f..... .....f.........f..... .....f.........f..... .....eccccccccce..... .....f.........f..... .....f.........f..... .....f.........f..... .....f....i....f..... .....effefffeffe..... .....................", "....cc.........cc.... ....deccecccecced.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....cecccccccccec.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....cecccccccccec.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....dchhhhhhhhhcd.... ....dchhhhihhhhcd.... ....deccecccecced.... ....cc.........cc....", ".....c.........c..... .....dffefffeffd..... .....d.........d..... .....d.........d..... .....d.........d..... .....d.........d..... .....c.........c..... .....d.........d..... .....d.........d..... .....d.........d..... .....c.........c..... .....d.........d..... .....d.........d..... .....d.........d..... .....d....i....d..... .....dffefffeffd..... .....c.........c.....", ".....c.........c..... .....dffefgfeffd..... .....d.........d..... .....d.........d..... .....d.........d..... .....d.........d..... .....c.........c..... .....d.........d..... .....d.........d..... .....d.........d..... .....c.........c..... .....d.........d..... .....d.........d..... .....d.........d..... .....d.........d..... .....dffefgfeffd..... .....c.........c.....", ".....cc.......cc..... .....dffefgfeffd..... .....d.........d..... .....d.........d..... .....d.........d..... .....d.........d..... .....c.........c..... .....d.........d..... .....d.........d..... .....d.........d..... .....c.........c..... .....d.........d..... .....d.........d..... .....d.........d..... .....d.........d..... .....dffefgfeffd..... .....cc.......cc.....", "......cc.....cc...... ......dfefcfefd...... ......d.......d...... ......d.......d...... ......d.......d...... ......d.......d...... ......c.......c...... ......d.......d...... ......d.......d...... ......d.......d...... ......c.......c...... ......d.......d...... ......d.......d...... ......d.......d...... ......d.......d...... ......dfefcfefd...... ......cc.....cc......", ".......ccc.ccc....... .......ddfffdd....... .......dd...dd....... .......dd...dd....... .......dd...dd....... .......dd...dd....... .......cc...cc....... .......dd...dd....... .......dd...dd....... .......dd...dd....... .......cc...cc....... .......dd...dd....... .......dd...dd....... .......dd...dd....... .......dd...dd....... .......ddfffdd....... .......ccc.ccc.......", ".........ccc......... .........ddd......... .........ddd......... .........ddd......... .........ddd......... .........ddd......... .........ccc......... .........ddd......... .........ddd......... .........ddd......... .........ccc......... .........ddd......... .........ddd......... .........ddd......... .........ddd......... .........ddd......... .........ccc........."]
        },
        rusticHome_house: {
          size: [17, 14, 15],
          palette: ["Pine Wood Planks", "Stone Bricks", "Smooth Stone", "Barkless Pine Log", "Maple Wood Planks", "Glass"],
          layers: ["................. .....cbbbbbc..... .....beeeeeb..... .....beeeeeb..... .cbbbbeeeeebbbbc. .beeeeeeeeeeeeeb. .beeeeeeeeeeeeeb. .beeeeeeeeeeeeeb. .beeeeeeeeeeeeeb. .beeeeeeeeeeeeeb. .cbbbeeeeeeebbbc. .....beeeeeb..... .....beeeeeb..... .....cbbbbbc..... .................", "................. .....cbb.bbc..... .....b.....b..... .....b.....b..... .cbbbd.....dbbbc. .b.............b. .b.............b. .b.............b. .b.............b. .b.............b. .cbbbdeed..dbbbc. .....b.....b..... .....b.....b..... .....cbbbbbc..... .................", "................. .....dee.eed..... .....e.....e..... .....e.....e..... .defed.....defed. .e.............e. .e.............e. .e.............e. .e.............e. .e.............e. .defed..d..defed. .....eee...e..... .....eee...e..... .....deeeeed..... .................", "................. .....deeaeed..... .....e.....e..... .....e.....e..... .defed.....defed. .e.............e. .e.............e. .e.............e. .e.............e. .e.............e. .defed..d..defed. .....e..e..e..... .....e..e..e..... .....deeeeed..... .................", "................. .....deeeeed..... .....e.....e..... .....e.....e..... .deeed.....deeed. .e.............e. .e.............e. .e.............e. .e.............e. .e.............e. .deeed..d..deeed. .....e...eee..... .....e...eee..... .....deeeeed..... .................", "................. .....aaaaaaa..... .....aeeeeea..... aa...aeeeeea...aa baaaaaaaaaaaaaaab baeeeaeeeeeaeeeab baeeeaeeeeeaeeeab baeeeaeeeeeaeeeab baeeeaeeeeeaeeeab baeeeaeeeeeaeeeab baaaaaaadaaaaaaab aa...a.....a...aa .....a.....a..... .....aaaaaaa..... .................", "................. .....deeeeed..... .....e.....e..... .aa..e.....e..aa. .beeed.....deeeb. .b...e.....e...b. .b...e.....e...b. .b...e.....e...b. .b...e.....e...b. .b...e.....e...b. .beeed..d..deeeb. .aa..e.....e..aa. .....e.....e..... .....deeeeed..... .................", "................. .....defefed..... .....e.....e..... ..aa.e.....e.aa.. ..beed.....deeb.. ..b..e.....e..b.. ..b..e.....e..b.. ..b..e.....e..b.. ..b..e.....e..b.. ..b..e.....e..b.. ..beed.....deeb.. ..aa.e.....e.aa.. .....e.....e..... .....defefed..... .................", "................. .....deeeeed..... .....e.....e..... ...aae.....eaa... ...bed.....deb... ...b.e.....e.b... ...b.e.....e.b... ...b.e.....e.b... ...b.e.....e.b... ...b.e.....e.b... ...bed.....deb... ...aae.....eaa... .....e.....e..... .....deeeeed..... .................", "....aa.....aa.... ....baaaaaaab.... ....ba.....ab.... ....aa.....aa.... ....ba.....ab.... ....ba.....ab.... ....ba.....ab.... ....ba.....ab.... ....ba.....ab.... ....ba.....ab.... ....ba.....ab.... ....aa.....aa.... ....ba.....ab.... ....baaaaaaab.... ....aa.....aa....", ".....aa...aa..... .....beeeeeb..... .....b.....b..... .....a.....a..... .....b.....b..... .....b.....b..... .....b.....b..... .....b.....b..... .....b.....b..... .....b.....b..... .....b.....b..... .....a.....a..... .....b.....b..... .....beeeeeb..... .....aa...aa.....", "......aa.aa...... ......beeeb...... ......b...b...... ......a...a...... ......b...b...... ......b...b...... ......b...b...... ......b...b...... ......b...b...... ......b...b...... ......b...b...... ......a...a...... ......b...b...... ......beeeb...... ......aa.aa......", ".......aaa....... .......beb....... .......b.b....... .......a.a....... .......b.b....... .......b.b....... .......b.b....... .......b.b....... .......b.b....... .......b.b....... .......b.b....... .......a.a....... .......b.b....... .......beb....... .......aaa.......", "........a........ ........b........ ........b........ ........a........ ........b........ ........b........ ........b........ ........b........ ........b........ ........b........ ........b........ ........a........ ........b........ ........b........ ........a........"]
        },
        market_shop: {
          size: [17, 16, 12],
          palette: ["Pine Wood Planks", "Smooth Stone", "Stone Bricks", "Barkless Pine Log", "Maple Wood Planks", "Blue Planks", "Glass", "White Wool", "Blue Wool", "Maple Ladder|meta|rot3"],
          layers: [".....bcccccb..... .....ccccccc..... .....ccccccc..... .....ccccccc..... .bcccbcccccbcccb. .ceeeeeeeeeeeeec. .ceeeeeeeeeeeeec. .ceeeeeeeeeeeeec. .ceeeeeeeeeeeeec. .ceeeeeeeeeeeeec. .ccccbcccccbcccb. .................", ".....d.....d..... ................. ................. ................. .bc.cbcccccbc.cb. .c.............c. .c.............c. .c.............c. .c.............c. .c.......j.....c. .bcccbcccccbcccb. .................", ".....d.....d..... ................. ................. ................. .de.ed.....de.ed. .e.............e. .e.............e. .e.............e. .e.............e. .e.......j.....e. .degedeeeeedeged. .................", ".....d.....d..... ................. ................. ................. .deaedaaaaadeaed. .e.............e. .e.............e. .e.............e. .e.............e. .e.......j.....e. .deaedeeeeedeaed. .................", ".....ahihiha..... .....ahihiha..... .....ahihiha..... .....ahihiha..... .deeedeeeeedeeed. .e.............e. .e.............e. .e.............e. .e.............e. .e.......j.....e. .deeedeeeeedeeed. .................", "................. ................. ................. afffffffffffffffa aaaaaaaaaaaaaaaaa .aeeeaeeeeeaeeea. .aeeeaeeeeeaeeea. .aeeeaeeeeeaeeea. .aeeeaeeeeeaeeea. .aeeeaeeejeaeeea. aaaaaaaaaaaaaaaaa affffa.....affffa", "................. ................. ................. ................. affffdeeeeedffffa ae...e.....e...ea .e...e.....e...e. .e...e.....e...e. .e...e.....e...e. ae...e...j.e...ea affffdeeeeedffffa .................", "................. ................. ................. ................. .....degeged..... affffe.....effffa ae...e.....e...ea .e...e.....e...e. ae...e.....e...ea affffe.....effffa .....degeged..... .................", "................. ................. ................. ................. .....degeged..... .....e.....e..... affffe.....effffa ae...e.....e...ea affffe.....effffa .....e.....e..... .....degeged..... .................", "................. ................. ................. ................. .....deaeaed..... .....e.....e..... .....e.....e..... affffe.....effffa .....e.....e..... .....e.....e..... .....deaeaed..... .................", "................. ................. ................. ................. .....deeeeed..... .....e.....e..... .....e.....e..... .....e.....e..... .....e.....e..... .....e.....e..... .....deeeeed..... .................", "................. ................. ................. ....aa.....aa.... ....faaaaaaaf.... ....fa.....af.... ....fa.....af.... ....fa.....af.... ....fa.....af.... ....fa.....af.... ....faaaaaaaf.... ....aa.....aa....", "................. ................. ................. .....aa...aa..... .....feeeeef..... .....f.....f..... .....f.....f..... .....f.....f..... .....f.....f..... .....f.....f..... .....feeeeef..... .....aa...aa.....", "................. ................. ................. ......aa.aa...... ......feeef...... ......f...f...... ......f...f...... ......f...f...... ......f...f...... ......f...f...... ......feeef...... ......aa.aa......", "................. ................. ................. .......aaa....... .......fef....... .......f.f....... .......f.f....... .......f.f....... .......f.f....... .......f.f....... .......fef....... .......aaa.......", "................. ................. ................. ........a........ ........f........ ........f........ ........f........ ........f........ ........f........ ........f........ ........f........ ........a........"]
        },
        castle_gate: {
          size: [17, 11, 5],
          palette: ["Smooth Stone", "Stone Bricks", "Maple Wood Planks", "Maple Ladder|meta|rot3"],
          layers: ["...aaa.....aaa... .d.a.a.....a.a.d. aaaa.a.....a.aaaa aaaa.a.....a.aaaa ...aaa.....aaa...", "...bbb.....bbb... .d.b.b.....b.b.d. bbbb.b.....b.bbbb bbbb.b.....b.bbbb ...bbb.....bbb...", "...abb.....bba... .d.b.b.....b.b.d. bbbb.b.....b.bbbb bbbb.b.....b.bbbb ...abb.....bba...", "...bbbb...bbbb... .d.b.bc...cb.b.d. bbbb.bc...cb.bbbb bbbb.bc...cb.bbbb ...bbbb...bbbb...", "...abbbbbbbbba... .d.bcccccccccb.d. ccccccccccccccccc bbbbcccccccccbbbb ...abbbbbbbbba...", "...bbabbabbabb... ...b.........b... ................. bbbb.........bbbb ...bbabbabbabb...", "...ab.bb.bb.ba... ...b.........b... ................. bb.b.........b.bb ...ab.bb.bb.ba...", "...bbabbabbabb... ...b.........b... ...a.........a... ...b.........b... ...bbabbabbabb...", "...abbbbbbbbba... ...bcccccccccb... ...bcccccccccb... ...bcccccccccb... ...abbbbbbbbba...", "...bbbbbbbbbbb... ...b.........b... ...b.........b... ...b.........b... ...bbbbbbbbbbb...", "...ab.bb.bb.ba... ...b.........b... ................. ...b.........b... ...ab.bb.bb.ba..."]
        },
        castle_tower: {
          size: [9, 20, 9],
          palette: ["Smooth Stone", "Stone Bricks", "Maple Wood Planks", "Barkless Pine Log", "Red Wool", "Maple Ladder|meta|rot3"],
          layers: ["aaaaaaaaa accccccca accccccca accccccca accccccca accccccca accccccca accccccca aaaaaaaaa", "bbbb.bbbb b.......b b.......b b.......b b.......b b.......b b.......b b.....f.b bbbbbbbbb", "abbb.bbba b.......b b.......b b.......b b.......b b.......b b.......b b.....f.b abbbbbbba", "bbbbabbbb b.......b b.......b b.......b b.......b b.......b b.......b b.....f.b bbbbbbbbb", "abbbbbbba bcccccccb bcccccccb bcccccccb bcccccccb bcccccccb bcccccccb bcccccfcb abbbbbbba", "bbbbabbbb b.......b b.......b b.......b a.......a b.......b b.......b b.....f.b bbbbabbbb", "abbb.bbba b.......b b.......b b.......b ......... b.......b b.......b b.....f.b abbb.bbba", "bbbbabbbb b.......b b.......b b.......b a.......a b.......b b.......b b.....f.b bbbbabbbb", "abbbbbbba bcccccccb bcccccccb bcccccccb bcccccccb bcccccccb bcccccccb bcccccfcb abbbbbbba", "bbbbabbbb b.......b b.......b b.......b a.......a b.......b b.......b b.....f.b bbbbabbbb", "abbb.bbba b.......b b.......b b.......b ......... b.......b b.......b b.....f.b abbb.bbba", "bbbbabbbb b.......b b.......b b.......b a.......a b.......b b.......b b.....f.b bbbbabbbb", "abbbbbbba bcccccccb bcccccccb bcccccccb bcccccccb bcccccccb bcccccccb bcccccfcb abbbbbbba", "bbbbbbbbb b.......b b.......b b.......b b...d...b b.......b b.......b b.......b bbbbbbbbb", "ab.bbb.ba b.......b ......... b.......b b...d...b b.......b ......... b.......b ab.bbb.ba", "......... ......... ......... ......... ....d.... ......... ......... ......... .........", "......... ......... ......... ......... ....d.... ......... ......... ......... .........", "......... ......... ......... ......... ....deee. ......... ......... ......... .........", "......... ......... ......... ......... ....deee. ......... ......... ......... .........", "......... ......... ......... ......... ....a.... ......... ......... ......... ........."]
        }
      },
      Zp = new Map;

    function zp(pp, ip) {
      const cp = `${pp}|${ip}`;
      let Op = Zp.get(cp);
      if (void 0 === Op) {
        const {
          size: op,
          palette: Ip,
          layers: Sp
        } = rp[pp], xp = 90 === ip || 270 === ip, [Lp, Yp] = xp ? [op[2], op[0]] : [op[0], op[2]], Dp = function(pp, ip, cp) {
          let Op = null,
            op = null,
            Ip = !1;
          switch (pp) {
            case 0:
              break;
            case 90:
              Op = ip - 1, Ip = !0;
              break;
            case 180:
              Op = ip - 1, op = cp - 1;
              break;
            case 270:
              op = cp - 1, Ip = !0;
              break;
            default:
              throw new Error(`Invalid rotation: ${pp}`)
          }
          return {
            xRotationMappedOrigin: Op,
            zRotationMappedOrigin: op,
            shouldSwapXZ: Ip
          }
        }(ip, Lp, Yp), Ap = Fp.for(Tp.e), Pp = Ip.map((pp => (0, Tp.d)(Ap.turnBlockId((0, Tp.f)(pp), ip, !1)))), Wp = [];
        Sp.forEach(((pp, ip) => {
          pp.split(" ").forEach(((pp, cp) => {
            for (let Op = 0; Op < pp.length; Op++)
              if ("." !== pp[Op]) {
                const op = [gp(Op, cp, Dp), ip, Gp(Op, cp, Dp)];
                Wp.push({
                  offset: op,
                  block: Pp[pp.charCodeAt(Op) - "a".charCodeAt(0)]
                })
              }
          }))
        })), Op = {
          size: [Lp, op[1], Yp],
          cells: Wp
        }, Zp.set(cp, Op)
      }
      return Op
    }
    const sp = "plotsBuildProgressChanged",
      Kp = new Map;

    function Vp(pp, ip, cp) {
      let Op = 0,
        op = 0;
      return function(pp) {
        let ip = Kp.get(pp);
        if (void 0 === ip) {
          const Op = [];
          for (const {
              offset: ip
            }
            of zp(pp, 0).cells) {
            var cp;
            Op[ip[1]] = (null !== (cp = Op[ip[1]]) && void 0 !== cp ? cp : 0) + 1
          }
          ip = Op, Kp.set(pp, ip)
        }
        return ip
      }(pp).forEach(((pp, cp) => {
        Op += pp, cp > ip && (op += pp)
      })), {
        id: pp,
        filled: Op - op - cp,
        total: Op
      }
    }
    class ii {
      constructor() {
        this.shown = null, this.topOpen = 0, this.progress = null
      }
      get() {
        return this.progress
      }
      show(pp) {
        this.shown = pp, this.topOpen = 0, null === pp && this.GA(null)
      }
      update(pp, ip, cp) {
        const Op = this.shown;
        null !== Op && (pp >= ip && (this.topOpen = cp), this.GA(Vp(Op.id, ip - Op.y, pp >= ip ? cp : this.topOpen + cp)))
      }
      GA(pp) {
        const ip = this.progress;
        (null === pp || void 0 === pp ? void 0 : pp.id) === (null === ip || void 0 === ip ? void 0 : ip.id) && (null === pp || void 0 === pp ? void 0 : pp.filled) === (null === ip || void 0 === ip ? void 0 : ip.filled) && (null === pp || void 0 === pp ? void 0 : pp.total) === (null === ip || void 0 === ip ? void 0 : ip.total) || (this.progress = pp, jp.m.GA(sp, pp, !0))
      }
    }
    const ci = "plotsPlotChanged",
      Oi = "plotsGuideChanged",
      oi = "plotsGuideDone";
    class Ii {
      constructor() {
        this.plot = ["none"], this.guide = ["none"]
      }
      getPlot() {
        return this.plot
      }
      receivePlot(pp) {
        this.plot = pp, jp.m.GA(ci, pp, !0)
      }
      getGuide() {
        return this.guide
      }
      receiveGuide(pp) {
        this.guide = pp, jp.m.GA(Oi, pp, !0)
      }
      receiveGuideDone() {
        jp.m.GA(oi, void 0, !0)
      }
    }
    var Si = cp(1295),
      xi = cp(38756),
      Li = cp(37084),
      Yi = cp(1502);

    function Di(pp) {
      let {
        onSkip: ip,
        className: cp
      } = pp;
      const {
        t: Op
      } = (0, Dp.H)();
      return (0, Jp.jsx)("button", {
        type: "button",
        className: Pp()("PlotsGuideSkipButton", cp),
        ...(0, Yi.h)(ip, "pointerup"),
        children: Op("tutorial:skip")
      })
    }

    function Ai(pp) {
      let {
        target: ip,
        placement: cp,
        spotlight: Op = null,
        children: op
      } = pp;
      const {
        t: Sp
      } = (0, Dp.H)(), xp = (0, Ip.useRef)(ip);
      return xp.current = ip, (0, Si.x)("popup", xp, null === Op ? null : Op.onSkip, null !== Op, null, "controller:menusSkipTutorial"), (0, Jp.jsxs)(Li.h, {
        target: ip,
        placement: cp,
        className: Pp()("PlotsGuideBubble", {
          Passive: null === Op
        }),
        spotlight: null !== Op,
        spotlightMargin: 30,
        children: [(0, Jp.jsxs)("div", {
          className: "PlotsGuideBubbleHeader",
          children: [(0, Jp.jsx)("img", {
            className: "PlotsGuideBubblePortrait",
            src: xi,
            alt: "",
            draggable: !1
          }), (0, Jp.jsx)("span", {
            className: "PlotsGuideBubbleSpeaker",
            children: Sp("plotsGame:maverickName")
          }), null !== Op && (0, Jp.jsx)(Di, {
            onSkip: Op.onSkip
          })]
        }), (0, Jp.jsx)("p", {
          className: "PlotsGuideBubbleText",
          children: op
        })]
      })
    }

    function Pi(pp) {
      let {
        className: ip,
        icon: cp,
        title: Op,
        children: op
      } = pp;
      return (0, Jp.jsxs)("div", {
        className: Pp()("PlotsCard", ip),
        role: "status",
        children: [(0, Jp.jsx)("span", {
          className: "PlotsCardIcon",
          children: (0, Jp.jsx)(Up.d, {
            name: cp
          })
        }), (0, Jp.jsxs)("div", {
          className: "PlotsCardBody",
          children: [(0, Jp.jsx)("div", {
            className: "PlotsCardTitle SmallTextBold",
            children: Op
          }), op]
        })]
      })
    }

    function Wi(pp) {
      let {
        progress: ip,
        goal: cp
      } = pp;
      const Op = Math.min(ip, cp);
      return (0, Jp.jsxs)("div", {
        className: "PlotsProgress",
        children: [(0, Jp.jsx)("div", {
          className: "PlotsProgressBar",
          role: "progressbar",
          "aria-valuemin": 0,
          "aria-valuemax": cp,
          "aria-valuenow": Op,
          children: (0, Jp.jsx)("div", {
            className: "PlotsProgressBarFill",
            style: {
              transform: `scaleX(${Op/cp})`
            }
          })
        }), (0, Jp.jsxs)("span", {
          className: "PlotsProgressCount",
          children: [Op, "/", cp]
        })]
      })
    }

    function yi(pp) {
      let {
        progress: ip,
        guide: cp
      } = pp;
      const {
        t: Op
      } = (0, Dp.H)(), {
        isTouchScreen: op
      } = (0, xp.o)(["isTouchScreen"]), Ip = ip.filled < 5;
      return (0, Jp.jsxs)(Jp.Fragment, {
        children: [(Ip || ip.total - ip.filled <= 5) && (0, Jp.jsx)("div", {
          className: "PlotsGuideHandLayer",
          children: (0, Jp.jsx)("div", {
            ref: cp.bindHand,
            className: "PlotsGuideHand",
            children: (0, Jp.jsx)(Up.d, {
              name: "hand-point-left",
              className: "SmallTextBold TouchTutorialIcon"
            })
          })
        }), (0, Jp.jsx)(yp.h, {
          placement: "bottom",
          children: (0, Jp.jsxs)(Pi, {
            icon: "hammer",
            title: Op(qp(ip.id).displayName.translationKey),
            children: [Ip && (0, Jp.jsx)("div", {
              className: "PlotsCardHint SmallTextLight",
              children: op ? Op("plotsGame:guideBuildTouch") : Ui(Op)
            }), (0, Jp.jsx)(Wi, {
              progress: ip.filled,
              goal: ip.total
            })]
          })
        })]
      })
    }

    function Ui(pp) {
      const ip = Yp.t["alt-fire"][0];
      return "Mouse3" === ip ? pp("plotsGame:guideBuildRightClick") : pp("plotsGame:guideBuildKeys", {
        key: (0, Yp.l)(ip)
      })
    }

    function wi() {
      return (0, Jp.jsx)("div", {
        className: "PlotsGuideDragHand",
        children: (0, Jp.jsx)(Up.d, {
          name: "hand-back-point-up",
          className: "SmallTextBold TouchTutorialIcon"
        })
      })
    }
    var vi = cp(1308),
      ti = cp(2657),
      Hi = cp(38624),
      di = cp(38399),
      ei = cp(37142),
      ui = cp(9375),
      ji = cp(9392),
      ki = cp(337),
      mi = cp(38033);
    const Ri = new Map([
        ["Aspen Wood Planks", [.78, .706, .502]],
        ["Barkless Aspen Log", [.792, .718, .518]],
        ["Barkless Pine Log", [.49, .353, .275]],
        ["Blue Planks", [.247, .267, .588]],
        ["Blue Wool", [.227, .267, .651]],
        ["Glass", [.702, .902, .882]],
        ["Green Wool", [.373, .467, .125]],
        ["Maple Ladder", [.612, .471, .29]],
        ["Maple Wood Planks", [.682, .561, .353]],
        ["Messy Stone", [.557, .58, .608]],
        ["Orange Planks", [.949, .549, .231]],
        ["Orange Wool", [.988, .522, .129]],
        ["Pine Wood Planks", [.475, .341, .263]],
        ["Red Planks", [.608, .2, .184]],
        ["Red Wool", [.69, .173, .145]],
        ["Smooth Stone", [.627, .651, .678]],
        ["Stone Bricks", [.522, .545, .573]],
        ["White Wool", [.98, .98, .98]]
      ]),
      qi = [...ei.c.blockRemoveActionRoots, ...di.b, ...ui.i, "Board", "Code Block", "Custom Lobby Block"],
      Mi = /^(open|closed|(inner|outer)(Left|Right)|Stacked|books\d+|Roots|\w*GrassRoots|Growing|FreshlyGrown|empty|full)$/;
    let Ci = null;

    function Ei() {
      return Ci ??= function() {
        const pp = Xi(),
          ip = Math.max(...pp.map((pp => Tp.e[pp].id))) + 1,
          cp = new Int32Array(ip),
          Op = new Int32Array(ip),
          op = new Uint8Array(ip).fill(1),
          Ip = new Uint8Array(ip),
          Sp = new Uint8Array(ip),
          xp = new Array(ip).fill("Air"),
          Lp = new Map,
          Yp = pp => {
            let ip = Lp.get(pp);
            return void 0 === ip && (ip = Lp.size + 1, Lp.set(pp, ip)), ip
          },
          Dp = new Set(qi);
        for (const Pp of pp) {
          var Ap;
          const {
            id: pp,
            meta: ip,
            altActionable: Lp,
            canBePlacedOver: Wp
          } = Tp.e[Pp];
          cp[pp] = Yp(li(Pp));
          const yp = ip.stairsCorner;
          if (null === yp) Op[pp] = cp[pp];
          else {
            const cp = yp.endsWith("Right");
            Op[pp] = Yp(`${ip.rootName}|rot${cp?ip.rot%4+1:ip.rot}|${ip.halfblockPlacement}|${yp.replace("Right","Left")}`)
          }
          op[pp] = Wp ? 1 : 0, Ip[pp] = Lp || null !== ip.open || Pp in mi.d || Dp.has(ip.rootName) || void 0 !== (0, di.e)(ip.rootName) ? 1 : 0;
          const {
            rootName: Up
          } = ip;
          Sp[pp] = null !== ip.open || di.b.includes(Up) || Up.includes("Bookshelf") || Up.includes("Mailbox") ? 1 : 0, xp[pp] = null !== (Ap = (0, Hi.e)(pp)) && void 0 !== Ap ? Ap : Up
        }
        return {
          kinds: cp,
          shapes: Op,
          empty: op,
          inUse: Ip,
          ownAltActionMessage: Sp,
          placingItems: xp
        }
      }(), Ci
    }

    function Xi() {
      return Object.keys(Tp.e).filter((pp => Tp.e[pp].name === pp))
    }

    function li(pp) {
      var ip;
      const cp = Tp.e[pp],
        {
          rootName: Op,
          rot: op
        } = cp.meta,
        [, ...Ip] = (null !== (ip = cp.rootMetaDesc) && void 0 !== ip ? ip : pp).split("|"),
        Sp = Ip.filter((pp => !("meta" === pp || Mi.test(pp) || (0, ji.C)(cp) && /^[nesw]+$/.test(pp) || ui.i.includes(Op) && /^[lrud]+$/.test(pp) || ki.M.includes(Op) && /^(left|right)$/.test(pp))));
      return [Op, ...Sp].map((pp => "fenceGate" === cp.model && pp === `rot${op}` ? "rot" + ((op - 1) % 2 + 1) : pp)).join("|")
    }

    function Qi(pp, ip) {
      const {
        kinds: cp,
        shapes: Op
      } = Ei();
      return cp[pp] === cp[ip] || Op[pp] === Op[ip]
    }

    function Ji(pp) {
      return 1 === Ei().empty[pp]
    }

    function Bi(pp) {
      return Ei().placingItems[pp]
    }

    function Ni(pp) {
      return Ri.get(Tp.e[pp].meta.rootName)
    }
    var Ti = cp(9368),
      fi = cp(9385);
    const bi = [0, 0, 0, 1, 1, 1],
      ai = (0, Ti.e)([
        [2, 0, 2, 6, 6, 6]
      ]),
      ni = (0, Ti.e)([
        [3, 0, 3, 5, 5, 5]
      ]),
      Fi = (0, Ti.e)([
        [3, 3, 3, 5, 8, 5]
      ]),
      gi = [0, 1, 2, 3].map((pp => (0, Ti.e)((0, Ti.t)([
        [3, 2, 0, 5, 7, 3]
      ], pp))));

    function Gi(pp) {
      const {
        Ww: ip,
        model: cp,
        blockModel: Op,
        meta: op
      } = Tp.e[pp];
      return void 0 !== ip ? ip : "CentreCross" === cp ? ai : null !== Op && void 0 !== Op && Op.startsWith("torch") ? op.halfblockPlacement === fi.c.side ? gi[op.rot - 1] : op.halfblockPlacement === fi.c.top ? Fi : ni : bi
    }
    var ri = cp(195);
    class Zi {
      constructor(pp) {
        this.api = pp, this.chunks = [], this.versions = [], this.lastCheckMs = -1 / 0
      }
      watch(pp) {
        const ip = ri.g.Qy;
        this.chunks = [];
        for (let cp = 0; cp < pp.length; cp += 3) {
          const Op = Math.floor(pp[cp] / ip),
            op = Math.floor(pp[cp + 1] / ip),
            Ip = Math.floor(pp[cp + 2] / ip);
          this.watches(Op, op, Ip) || this.chunks.push(Op, op, Ip)
        }
        this.versions = [], this.lastCheckMs = -1 / 0, this.changed()
      }
      changed() {
        const pp = performance.now();
        if (pp - this.lastCheckMs < 100) return !1;
        this.lastCheckMs = pp;
        let ip = !1;
        for (let cp = 0; cp < this.chunks.length; cp += 3) {
          const pp = this.api.getChunkVersion(this.chunks[cp], this.chunks[cp + 1], this.chunks[cp + 2]);
          this.versions[cp / 3] !== pp && (this.versions[cp / 3] = pp, ip = !0)
        }
        return ip
      }
      watches(pp, ip, cp) {
        for (let Op = 0; Op < this.chunks.length; Op += 3)
          if (this.chunks[Op] === pp && this.chunks[Op + 1] === ip && this.chunks[Op + 2] === cp) return !0;
        return !1
      }
    }
    var zi = cp(38736);
    const si = .35,
      Ki = {
        size: .9,
        alpha: .35,
        crossed: !1
      },
      Vi = {
        size: 1.04,
        alpha: .45,
        crossed: !0
      },
      pc = [.95, .2, .15];
    class ic {
      constructor() {
        this.groups = []
      }
      add(pp, ip, cp, Op, op) {
        let Ip = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : bi;
        for (const Sp of this.groups)
          if (oc(Sp, Op, op)) return Sp.cells.push(pp, ip, cp), void Sp.boxes.push(Ip);
        this.groups.push({
          rgb: Op,
          look: op,
          cells: [pp, ip, cp],
          boxes: [Ip]
        })
      }
      toArray() {
        return this.groups
      }
    }
    class cc {
      constructor(pp) {
        this.api = pp, this.shown = []
      }
      show(pp) {
        const ip = [];
        for (const cp of pp) {
          const pp = this.shown.findIndex((pp => {
            let {
              group: ip
            } = pp;
            return oc(ip, cp.rgb, cp.look) && Ic(ip, cp)
          })); - 1 === pp ? ip.push(this.build(cp)) : (ip.push(this.shown[pp]), this.shown.splice(pp, 1))
        }
        this.dispose(), this.shown = ip
      }
      dispose() {
        for (const {
            meshes: pp
          }
          of this.shown)
          for (const ip of pp) this.api.disposeGameMesh(ip);
        this.shown = []
      }
      build(pp) {
        const {
          rgb: ip,
          look: cp,
          boxes: Op
        } = pp, op = [ip[0] + (1 - ip[0]) * si, ip[1] + (1 - ip[1]) * si, ip[2] + (1 - ip[2]) * si], Ip = [this.buildMesh(pp.cells, ip, cp.alpha, ((pp, ip, op, Ip) => {
          Oc(pp, ip, op, Op[Ip], cp.size, !1)
        })), this.buildMesh(pp.cells, op, cp.alpha, ((pp, ip, op, Ip) => {
          Oc(pp, ip, op, Op[Ip], cp.size, !0)
        }))];
        return cp.crossed && Ip.push(this.buildMesh(pp.cells, ip, .9, ((pp, ip, Op) => {
          (0, zi.i)(pp, ip, Op, cp.size + .01, .12)
        }))), {
          group: pp,
          meshes: Ip
        }
      }
      buildMesh(pp, ip, cp, Op) {
        const op = [pp[0], pp[1], pp[2]],
          Ip = [],
          Sp = [];
        for (let xp = 0; xp < pp.length; xp += 3) Op(Ip, Sp, [pp[xp] - op[0] + .5, pp[xp + 1] - op[1] + .5, pp[xp + 2] - op[2] + .5], xp / 3);
        return this.api.createGameMesh({
          positions: Ip,
          indices: Sp
        }, {
          rgb: [ip[0], ip[1], ip[2]],
          alpha: cp
        }, op)
      }
    }

    function Oc(pp, ip, cp, Op, op, Ip) {
      for (let Sp = 0; Sp < Op.length; Sp += 6) {
        const xp = [0, 0, 0],
          Lp = [0, 0, 0];
        for (let pp = 0; pp < 3; pp++) xp[pp] = cp[pp] + ((Op[Sp + pp] + Op[Sp + pp + 3]) / 2 - .5) * op, Lp[pp] = (Op[Sp + pp + 3] - Op[Sp + pp]) * op;
        (0, zi.b)(pp, ip, xp, Lp, Ip)
      }
    }

    function oc(pp, ip, cp) {
      return pp.rgb[0] === ip[0] && pp.rgb[1] === ip[1] && pp.rgb[2] === ip[2] && pp.look === cp
    }

    function Ic(pp, ip) {
      if (pp.cells.length !== ip.cells.length) return !1;
      for (let cp = 0; cp < pp.cells.length; cp++)
        if (pp.cells[cp] !== ip.cells[cp]) return !1;
      return pp.boxes.every(((pp, cp) => pp === ip.boxes[cp]))
    }

    function Sc(pp, ip, cp, Op, op) {
      if (!pp.isBlockInLoadedChunk(ip, Op - 6, cp) || !pp.isBlockInLoadedChunk(ip, Op + 6 + op, cp) || !pp.canModifyBlockAt(ip, Op, cp)) return NaN;
      let Ip = Op - 1;
      if (0 !== pp.getBlockId(ip, Ip, cp)) {
        for (; Ip < Op + 6 && 0 !== pp.getBlockId(ip, Ip + 1, cp);) Ip++;
        return Ip
      }
      for (; Ip > Op - 6;)
        if (Ip--, 0 !== pp.getBlockId(ip, Ip, cp)) return Ip;
      return NaN
    }

    function xc(pp, ip, cp, Op, op) {
      let Ip = 0;
      for (let Sp = Op + 1; Sp <= Op + op; Sp++) 0 !== pp.getBlockId(ip, Sp, cp) && Ip++;
      return Ip
    }

    function Lc(pp) {
      const ip = new Map;
      for (const Sp of pp) {
        var cp;
        if (Number.isNaN(Sp)) return null;
        ip.set(Sp, (null !== (cp = ip.get(Sp)) && void 0 !== cp ? cp : 0) + 1)
      }
      let Op = NaN,
        op = 0;
      for (const [Sp, xp] of ip)(xp > op || xp === op && Sp < Op) && (Op = Sp, op = xp);
      let Ip = 0;
      for (const Sp of pp) Ip += Math.abs(Sp - Op);
      return Ip
    }

    function Yc(pp, ip, cp, Op) {
      const {
        eye: op,
        forward: Ip,
        tanHalfFovX: Sp,
        tanHalfFovY: xp
      } = pp, [Lp, Yp] = function(pp) {
        let [ip, cp, Op] = pp;
        const op = Math.hypot(ip, Op),
          [Ip, Sp] = [Op / op, -ip / op];
        return [
          [Ip, 0, Sp],
          [cp * Sp, Op * Ip - ip * Sp, -cp * Ip]
        ]
      }(Ip), [Dp, Ap] = [ip * Sp, cp * xp], Pp = Ip[0] + Dp * Lp[0] + Ap * Yp[0], Wp = Ip[1] + Ap * Yp[1], yp = Ip[2] + Dp * Lp[2] + Ap * Yp[2], Up = (Op - op[1]) / Wp;
      return Up > 0 && Up < 1 / 0 ? [op[0] + Up * Pp, op[2] + Up * yp] : null
    }
    const Dc = "plotsBlueprintPlacementChanged",
      Ac = {
        size: .9,
        alpha: .2,
        crossed: !1
      };
    class Pc {
      constructor(pp, ip) {
        this.api = pp, this.localPlayerId = ip, this.placing = null, this.view = null, this.camera = {
          eye: [0, 0, 0],
          forward: [0, 0, 1],
          tanHalfFovX: 1,
          tanHalfFovY: 1
        }, this.chunkWatch = void 0, this.meshes = void 0, this.start = pp => {
          var ip, cp, Op, Ip;
          const Sp = null !== (ip = null === (cp = this.placing) || void 0 === cp ? void 0 : cp.rotation) && void 0 !== ip ? ip : 0,
            {
              size: xp
            } = zp(pp, Sp),
            Lp = this.api.sH(this.localPlayerId),
            [Yp, Dp] = null !== (Op = null !== (Ip = function(pp, ip, cp, Op) {
              const [op, Ip, Sp] = ip, [xp, Lp, Yp] = [Math.floor(cp[0]), Math.floor(cp[1]), Math.floor(cp[2])], Dp = 6 + Math.max(op, Sp) / 2, [Ap, Pp] = [Math.ceil(Dp + op / 2), Math.ceil(Dp + Sp / 2)], [Wp, yp] = [xp - Ap, Yp - Pp], [Up, wp] = [2 * Ap + 1, 2 * Pp + 1], vp = new Float64Array(Up * wp), tp = new Uint16Array(Up * wp);
              for (let kp = 0; kp < Up; kp++)
                for (let ip = 0; ip < wp; ip++) {
                  const cp = Sc(pp, Wp + kp, yp + ip, Lp, Ip);
                  vp[kp * wp + ip] = cp, Number.isNaN(cp) || (tp[kp * wp + ip] = xc(pp, Wp + kp, yp + ip, cp, Ip))
                }
              const Hp = Math.hypot(Op[0], Op[2]),
                dp = [];
              let ep = null,
                jp = 1 / 0;
              for (let kp = 0; kp + op <= Up; kp++)
                for (let pp = 0; pp + Sp <= wp; pp++) {
                  const [ip, Ip] = [Wp + kp, yp + pp], [Lp, Ap] = [ip + op / 2 - cp[0], Ip + Sp / 2 - cp[2]], Pp = Math.hypot(Lp, Ap);
                  if (Pp > Dp || xp >= ip - 2 && xp < ip + op + 2 && Yp >= Ip - 2 && Yp < Ip + Sp + 2) continue;
                  dp.length = 0;
                  let Up = 0;
                  for (let cp = 0; cp < op; cp++)
                    for (let ip = 0; ip < Sp; ip++) dp.push(vp[(kp + cp) * wp + pp + ip]), Up += tp[(kp + cp) * wp + pp + ip];
                  const mp = Lc(dp);
                  if (null === mp) continue;
                  const Rp = Pp + 3 * (mp + Up) + (1 - (0 === Hp ? 1 : (Lp * Op[0] + Ap * Op[2]) / (Pp * Hp))) / 2 * 6;
                  Rp < jp && (jp = Rp, ep = [ip, Ip])
                }
              return ep
            }(this.api, xp, Lp, this.camera.forward)) && void 0 !== Ip ? Ip : this.cornerOnTarget(xp)) && void 0 !== Op ? Op : [Math.floor(Lp[0]) + 2, Math.floor(Lp[2])];
          this.placing = {
            id: pp,
            rotation: Sp,
            corner: [Yp, this.playerLevel(), Dp],
            sent: null,
            refusals: 0,
            hover: null,
            drag: null,
            moved: !1,
            stillSinceMs: performance.now()
          }, this.update(), this.api.sendCommand(`${op} preview`)
        }, this.rotate = () => {
          const {
            id: pp,
            rotation: ip,
            corner: cp
          } = this.placing, op = Op[(Op.indexOf(ip) + 1) % Op.length], [Ip, , Sp] = zp(pp, ip).size, [xp, , Lp] = zp(pp, op).size;
          this.moveTo(cp[0] + Math.floor(Ip / 2) - Math.floor(xp / 2), cp[2] + Math.floor(Sp / 2) - Math.floor(Lp / 2), op)
        }, this.hoverAt = (pp, ip) => {
          this.placing.hover = [pp, ip], this.moveCentreTo(this.camera, pp, ip)
        }, this.endHover = () => {
          this.placing.hover = null
        }, this.beginDrag = (pp, ip) => {
          const cp = this.placing,
            {
              eye: Op,
              forward: op,
              tanHalfFovX: Ip,
              tanHalfFovY: Sp
            } = this.camera,
            xp = {
              eye: [Op[0], Op[1], Op[2]],
              forward: [op[0], op[1], op[2]],
              tanHalfFovX: Ip,
              tanHalfFovY: Sp
            },
            Lp = cp.corner[1],
            Yp = Yc(xp, pp, ip, Lp);
          cp.hover = null, cp.drag = Yp && {
            view: xp,
            ground: Yp,
            corner: [cp.corner[0], cp.corner[2]],
            level: Lp
          }
        }, this.dragTo = (pp, ip) => {
          const cp = this.placing.drag,
            Op = cp && Yc(cp.view, pp, ip, cp.level);
          null !== cp && null !== Op && this.moveTo(cp.corner[0] + Math.round(Op[0] - cp.ground[0]), cp.corner[1] + Math.round(Op[1] - cp.ground[1]))
        }, this.endDrag = () => {
          this.placing.drag = null
        }, this.tap = () => {
          const pp = this.view;
          pp.waiting || (pp.blocked ? this.GA({
            ...pp,
            refusals: ++this.placing.refusals
          }) : this.build())
        }, this.build = () => {
          const pp = this.placing,
            {
              id: ip,
              rotation: cp,
              corner: Op
            } = pp;
          this.api.sendCommand(`${op} place ${ip} ${Op.join(" ")} ${cp}`), pp.sent = {
            atMs: performance.now(),
            corner: [...Op],
            rotation: cp,
            timedOut: !1
          }, this.update()
        }, this.stop = () => {
          null !== this.placing && (this.close(), this.api.sendCommand(`${op} preview off`))
        }, this.chunkWatch = new Zi(pp), this.meshes = new cc(pp)
      }
      getView() {
        return this.view
      }
      LP() {
        const pp = this.placing;
        null !== pp && (null !== pp.sent && !pp.sent.timedOut && performance.now() - pp.sent.atMs > 3e3 ? (pp.sent.timedOut = !0, this.update()) : (this.followPlayerLevel(pp) || this.chunkWatch.changed() || this.view.settled !== Wc(pp, this.view.blocked)) && this.update())
      }
      afterRender(pp) {
        ! function(pp, ip) {
          for (let cp = 0; cp < 3; cp++) ip.eye[cp] = pp.cameraPosition[cp], ip.forward[cp] = pp.cameraDirection[cp];
          ip.tanHalfFovX = pp.tanHalfFovX, ip.tanHalfFovY = pp.tanHalfFovY
        }(pp, this.camera);
        const ip = this.placing;
        null !== ip && null !== ip.hover && this.moveCentreTo(this.camera, ip.hover[0], ip.hover[1])
      }
      Ey(pp) {
        const ip = this.placing;
        if (null === ip || null === ip.sent || "active" !== pp[0]) return;
        const {
          sent: cp
        } = ip, [, Op, op, Ip, Sp, xp, Lp] = pp;
        op && Op === ip.id && Lp === cp.rotation && Ip === cp.corner[0] && Sp === cp.corner[1] && xp === cp.corner[2] && this.close()
      }
      endFromServer() {
        null !== this.placing && this.close()
      }
      dispose() {
        this.meshes.dispose()
      }
      cornerOnTarget(pp) {
        let [ip, , cp] = pp;
        const Op = this.api.getTargetedBlock();
        if (null === Op) return null;
        const [op, , Ip] = Op.position;
        return [op - Math.floor(ip / 2), Ip - Math.floor(cp / 2)]
      }
      playerLevel() {
        var pp;
        const [ip, cp, Op] = this.api.sH(this.localPlayerId);
        if (null !== (pp = this.api.getLocalPlayerMovement()) && void 0 !== pp && pp.onGround) return Math.ceil(cp - .01);
        const [op, Ip, Sp] = [Math.floor(ip), Math.floor(cp), Math.floor(Op)];
        for (let xp = Ip; xp >= Ip - 2; xp--)
          if (this.api.isSolidToPlayerBlockId(this.api.getBlockId(op, xp, Sp))) return xp + 1;
        return Ip
      }
      followPlayerLevel(pp) {
        if (yc(pp)) return !1;
        const ip = this.playerLevel();
        return ip !== pp.corner[1] && (pp.corner[1] = ip, !0)
      }
      moveCentreTo(pp, ip, cp) {
        const Op = this.placing,
          op = Yc(pp, ip, cp, Op.corner[1]);
        if (null !== op) {
          const [pp, , ip] = zp(Op.id, Op.rotation).size;
          this.moveTo(Math.round(op[0] - pp / 2), Math.round(op[1] - ip / 2))
        }
      }
      moveTo(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const Op = this.placing;
        if (yc(Op)) return;
        const [op, Ip, Sp] = Op.corner;
        if (this.centreOnPlot(op, Sp) && !this.centreOnPlot(pp, ip, cp))
          if (this.centreOnPlot(pp, Sp, cp)) ip = Sp;
          else {
            if (!this.centreOnPlot(op, ip, cp)) return;
            pp = op
          } pp === op && ip === Sp && cp === Op.rotation || (Op.rotation = cp, Op.corner = [pp, Ip, ip], Op.moved = !0, Op.stillSinceMs = performance.now(), this.update())
      }
      centreOnPlot(pp, ip) {
        let cp = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : this.placing.rotation;
        const {
          id: Op,
          corner: op
        } = this.placing, [Ip, , Sp] = zp(Op, cp).size;
        return this.api.canModifyBlockAt(pp + Math.floor(Ip / 2), op[1], ip + Math.floor(Sp / 2))
      }
      close() {
        this.placing = null, this.meshes.dispose(), this.GA(null)
      }
      update() {
        const {
          id: pp,
          rotation: ip,
          corner: cp,
          refusals: Op
        } = this.placing, op = new ic, Ip = [];
        let Sp = !1,
          xp = 0;
        for (const {
            offset: Ap,
            block: Pp
          }
          of zp(pp, ip).cells) {
          const [pp, ip, Op] = [cp[0] + Ap[0], cp[1] + Ap[1], cp[2] + Ap[2]];
          Ip.push(pp, ip, Op);
          const Lp = !this.api.canModifyBlockAt(pp, ip, Op),
            Yp = this.api.getBlockId(pp, ip, Op),
            Dp = !Ji(Yp) && !Qi(this.api.blockNameToBlockId(Pp), Yp);
          Sp ||= Lp, xp += Dp ? 1 : 0, Lp || Dp ? op.add(pp, ip, Op, pc, Vi) : op.add(pp, ip, Op, Ni(Pp), Ac, Gi(Pp))
        }
        this.chunkWatch.watch(Ip), this.meshes.show(op.toArray());
        const Lp = this.view,
          Yp = yc(this.placing),
          Dp = Wc(this.placing, Sp);
        (null === Lp || void 0 === Lp ? void 0 : Lp.id) === pp && Lp.blocked === Sp && Lp.toClear === xp && Lp.waiting === Yp && Lp.refusals === Op && Lp.settled === Dp || this.GA({
          id: pp,
          blocked: Sp,
          toClear: xp,
          waiting: Yp,
          refusals: Op,
          settled: Dp
        })
      }
      GA(pp) {
        this.view = pp, jp.m.GA(Dc, pp, !0)
      }
    }

    function Wc(pp, ip) {
      let {
        moved: cp,
        stillSinceMs: Op
      } = pp;
      return !ip && performance.now() - Op >= (cp ? 1500 : 6e3)
    }

    function yc(pp) {
      let {
        sent: ip
      } = pp;
      return null !== ip && !ip.timedOut
    }
    var Uc = cp(4635);
    class wc {
      constructor(pp) {
        this.placement = pp, this.press = null
      }
      down(pp) {
        if (null !== this.press) return !1;
        const {
          id: ip,
          mouse: cp,
          x: Op,
          y: op,
          atMs: Ip
        } = pp;
        return this.press = {
          id: ip,
          mouse: cp,
          x: Op,
          y: op,
          atMs: Ip,
          moved: !1
        }, cp || this.placement.beginDrag(pp.ndcX, pp.ndcY), !0
      }
      move(pp) {
        const ip = this.press;
        null !== ip && ip.id === pp.id && (ip.moved ||= Math.hypot(pp.x - ip.x, pp.y - ip.y) > 8), pp.mouse ? this.placement.hoverAt(pp.ndcX, pp.ndcY) : (null === ip || void 0 === ip ? void 0 : ip.id) === pp.id && this.placement.dragTo(pp.ndcX, pp.ndcY)
      }
      up(pp) {
        const ip = this.press;
        (null === ip || void 0 === ip ? void 0 : ip.id) === pp.id && (this.move(pp), this.end(), !ip.moved && (ip.mouse || pp.atMs - ip.atMs <= 250) && this.placement.tap())
      }
      cancel(pp) {
        var ip;
        (null === (ip = this.press) || void 0 === ip ? void 0 : ip.id) === pp && this.end()
      }
      leave(pp) {
        let {
          id: ip,
          mouse: cp
        } = pp;
        cp && this.placement.endHover(), this.cancel(ip)
      }
      end() {
        this.press.mouse || this.placement.endDrag(), this.press = null
      }
    }
    const vc = "PlotsPlacementLayer";

    function tc(pp) {
      let {
        placement: ip
      } = pp;
      return null === (0, Lp.i)(Dc, ip.getView()) ? null : (0, Jp.jsx)(Hc, {
        placement: ip
      })
    }

    function Hc(pp) {
      let {
        placement: ip
      } = pp;
      (0, Uc.e)(!0, !0, vc);
      const cp = (0, Ip.useMemo)((() => new wc(ip)), [ip]);
      return (0, Jp.jsx)("div", {
        className: "PlotsPlacementLayer",
        onPointerDown: pp => {
          "mouse" === pp.pointerType && 0 !== pp.button || !cp.down(dc(pp)) || pp.currentTarget.setPointerCapture(pp.pointerId)
        },
        onPointerMove: pp => {
          cp.move(dc(pp))
        },
        onPointerUp: pp => {
          cp.up(dc(pp))
        },
        onPointerCancel: pp => {
          cp.cancel(pp.pointerId)
        },
        onLostPointerCapture: pp => {
          cp.cancel(pp.pointerId)
        },
        onPointerLeave: pp => {
          cp.leave(dc(pp))
        },
        "aria-hidden": !0
      })
    }

    function dc(pp) {
      const {
        left: ip,
        top: cp,
        width: Op,
        height: op
      } = pp.currentTarget.getBoundingClientRect();
      return {
        id: pp.pointerId,
        mouse: "mouse" === pp.pointerType,
        x: pp.clientX,
        y: pp.clientY,
        ndcX: (pp.clientX - ip) / Op * 2 - 1,
        ndcY: 1 - (pp.clientY - cp) / op * 2,
        atMs: pp.timeStamp
      }
    }

    function ec() {
      return (0, vi.q)().some((pp => pp !== vi.c && pp !== vc))
    }
    const uc = 2500;

    function jc(pp) {
      let {
        hud: ip,
        guide: cp,
        tracker: Op,
        placement: op,
        children: Sp
      } = pp;
      const {
        t: Ap
      } = (0, Dp.H)(), {
        isTouchScreen: Pp
      } = (0, xp.o)(["isTouchScreen"]), Wp = (0, Lp.i)(Oi, ip.getGuide()), yp = (0, Lp.i)(ci, ip.getPlot()), Up = (0, Lp.i)(sp, Op.get()), wp = function(pp) {
        const {
          openInGameMenuName: ip,
          openEverythingMenuName: cp,
          loadingOverlayVisible: Op
        } = (0, xp.o)(["openInGameMenuName", "openEverythingMenuName", "loadingOverlayVisible"]), op = (0, ti.b)(), [Sp, Yp] = (0, Ip.useState)(ec);
        (0, Ip.useEffect)((() => {
          const pp = () => {
            Yp(ec())
          };
          pp();
          const ip = (0, vi.p)(pp),
            cp = (0, vi.l)(pp);
          return () => {
            ip(), cp()
          }
        }), []);
        const Dp = (0, Lp.i)(Dc, pp.getView()),
          Ap = "clientGame" === ip;
        return {
          hudHidden: op || Op,
          journalOpen: Ap,
          covered: Sp || null !== cp || null !== ip && !Ap,
          placing: null === Dp ? null : Dp.settled ? "placeBuild" : "placeSpot"
        }
      }(op), vp = function(pp, ip, cp) {
        return "none" === pp[0] || cp.hudHidden || cp.journalOpen || cp.covered ? null : null !== cp.placing ? cp.placing : null !== ip ? "build" : "choose" === pp[1] ? "openJournal" : null
      }(Wp, null === Up ? null : Up.id, wp), tp = function() {
        const [pp, ip] = (0, Ip.useState)(null), [cp, Op] = (0, Ip.useState)(!1);
        return (0, Lp.f)(oi, (() => {
          ip(performance.now())
        })), (0, Ip.useEffect)((() => {
          if (null === pp) return;
          const ip = window.setTimeout((() => {
              Op(!0)
            }), uc),
            cp = window.setTimeout((() => {
              Op(!1)
            }), 7500);
          return () => {
            window.clearTimeout(ip), window.clearTimeout(cp)
          }
        }), [pp]), cp
      }() && !wp.hudHidden && !wp.covered && !wp.journalOpen && null === wp.placing, [Hp, dp] = (0, Ip.useState)(!1);
      (0, Ip.useEffect)((() => {
        wp.journalOpen && dp(!0)
      }), [wp.journalOpen]);
      const [jp, kp] = (0, Ip.useState)(null), [mp, Rp] = (0, Ip.useState)(null), [qp, Mp] = (0, Ip.useState)(null), Cp = (0, Ip.useMemo)((() => ({
        hint: vp,
        journalRef: kp,
        placementCardRef: Rp,
        buildRef: Mp
      })), [vp]), Ep = "plot" === yp[0] && "own" === yp[5], Xp = Pp && !Hp && Ep ? {
        onSkip: cp.skip
      } : null;
      return (0, Jp.jsxs)(ep.Provider, {
        value: Cp,
        children: [Sp, "openJournal" === vp && null !== jp && (0, Jp.jsx)(Ai, {
          target: jp,
          placement: "left",
          spotlight: Xp,
          children: Pp ? Ap("plotsGame:guideOpenJournal") : Ap("plotsGame:guideOpenJournalKeys", {
            key: (0, Yp.l)(Bp)
          })
        }), "placeSpot" === vp && null !== mp && (0, Jp.jsxs)(Jp.Fragment, {
          children: [Pp && (0, Jp.jsx)(wi, {}), (0, Jp.jsx)(Ai, {
            target: mp,
            placement: "top",
            children: Ap(Pp ? "plotsGame:guidePlaceSpotTouch" : "plotsGame:guidePlaceSpotMouse")
          })]
        }), "placeBuild" === vp && null !== qp && null !== mp && (0, Jp.jsx)(Ai, {
          target: Pp ? qp : mp,
          placement: "top",
          children: Ap(Pp ? "plotsGame:guidePlaceBuildTouch" : "plotsGame:guidePlaceBuildMouse")
        }), "build" === vp && null !== Up && (0, Jp.jsx)(yi, {
          progress: Up,
          guide: cp
        }), tp && null !== jp && (0, Jp.jsx)(Ai, {
          target: jp,
          placement: "left",
          children: Ap("plotsGame:guideMoreBuilds")
        })]
      })
    }
    var kc = cp(38712),
      mc = cp(38719);
    class Rc {
      constructor(pp, ip, cp) {
        this.api = pp, this.localPlayerId = ip, this.nextCell = cp, this.hand = null, this.skip = () => {
          this.api.sendCommand("plotsguide skip")
        }, this.bindHand = pp => {
          this.hand = pp
        }
      }
      afterRender(pp) {
        const ip = this.hand;
        if (null === ip) return;
        const cp = this.nextCell.get();
        if (null === cp) return void(0, kc.d)(ip, !0);
        const Op = (0, mc.e)(ip, pp, this.api.getPositionView(this.localPlayerId), cp, 1, 40);
        null !== Op && (0, kc.b)(ip, Math.round(100 * Op.x) / 100, Math.round(100 * Op.y) / 100)
      }
    }
    var qc = cp(1480),
      Mc = cp(4621),
      Cc = cp(1139);
    const Ec = {
        farm_hut: cp.p + "static/media/farm_hut.6896d8a2c96c4aa7f2fd.webp",
        farm_house: cp.p + "static/media/farm_house.cec7df65d0fe7e2bda7f.webp",
        farm_barn: cp.p + "static/media/farm_barn.be0d2b53d8dee46c2a20.webp",
        rusticHome_tent: cp.p + "static/media/rusticHome_tent.e0c857b94eb15660ffce.webp",
        rusticHome_cabin: cp.p + "static/media/rusticHome_cabin.d6d2030fc12c0f2f3bdd.webp",
        rusticHome_house: cp.p + "static/media/rusticHome_house.4e3af79cf97326dfd0f6.webp",
        market_stand: cp.p + "static/media/market_stand.945ed55a5fced389f3f2.webp",
        market_stall: cp.p + "static/media/market_stall.9a562807f9dff591618a.webp",
        market_shop: cp.p + "static/media/market_shop.190d8a0a0ea37a0db19e.webp",
        castle_wall: cp.p + "static/media/castle_wall.a836dd2c0361ad566caa.webp",
        castle_gate: cp.p + "static/media/castle_gate.84f01ebbd69b2fa991ce.webp",
        castle_tower: cp.p + "static/media/castle_tower.f93382e3a0eeb3089817.webp"
      },
      Xc = ["plotsGame:guideEffortQuick", "plotsGame:guideEffortMedium", "plotsGame:guideEffortBigger"],
      lc = ["market_stand", "rusticHome_tent", "farm_hut"].map((pp => ({
        id: pp,
        blocks: zp(pp, 0).cells.length
      }))).sort(((pp, ip) => pp.blocks - ip.blocks)).map(((pp, ip) => ({
        ...pp,
        effortKey: Xc[ip]
      })));

    function Qc(pp) {
      let {
        onBuild: ip
      } = pp;
      const {
        t: cp
      } = (0, Dp.H)();
      return (0, Jp.jsx)("div", {
        className: "PlotsJournalBookPages PlotsGuideChooserCover",
        children: (0, Jp.jsxs)("div", {
          className: "PlotsGuideChooser",
          children: [(0, Jp.jsx)("h3", {
            className: "PlotsGuideChooserTitle",
            children: cp("plotsGame:guidePickTitle")
          }), (0, Jp.jsxs)("p", {
            className: "PlotsGuideChooserNote",
            children: [(0, Jp.jsx)("img", {
              src: xi,
              alt: "",
              draggable: !1
            }), cp("plotsGame:guidePickNote")]
          }), (0, Jp.jsx)("div", {
            className: "PlotsGuideChooserStarters",
            children: lc.map((pp => {
              let {
                id: Op,
                blocks: op,
                effortKey: Ip
              } = pp;
              return (0, Jp.jsxs)("article", {
                className: "PlotsGuideStarter",
                children: [(0, Jp.jsx)("button", {
                  type: "button",
                  className: "PlotsGuideStarterSketch",
                  tabIndex: -1,
                  "aria-hidden": !0,
                  "data-pad-ignore": !0,
                  onClick: () => {
                    ip(Op)
                  },
                  children: (0, Jp.jsx)("img", {
                    src: Ec[Op],
                    alt: "",
                    draggable: !1
                  })
                }), (0, Jp.jsxs)("div", {
                  className: "PlotsGuideStarterInfo",
                  children: [(0, Jp.jsxs)("span", {
                    className: "PlotsGuideStarterText",
                    children: [(0, Jp.jsx)("span", {
                      className: "PlotsGuideStarterName",
                      children: cp(qp(Op).displayName.translationKey)
                    }), (0, Jp.jsx)("span", {
                      className: "PlotsGuideStarterEffort",
                      children: cp(Ip)
                    }), (0, Jp.jsx)("span", {
                      className: "PlotsGuideStarterBlocks",
                      children: cp("plotsGame:journalBlocks", {
                        blocks: String(op)
                      })
                    })]
                  }), (0, Jp.jsx)(qc.o, {
                    onClick: () => {
                      ip(Op)
                    },
                    children: cp("plotsGame:placementBuild")
                  })]
                })]
              }, Op)
            }))
          })]
        })
      })
    }

    function Jc(pp) {
      let {
        direction: ip,
        disabled: cp,
        onTurn: Op
      } = pp;
      const {
        t: op
      } = (0, Dp.H)();
      return (0, Jp.jsx)("div", {
        className: Pp()("PlotsJournalArrow", ip),
        children: (0, Jp.jsx)(qc.f, {
          disabled: cp,
          ariaLabel: op("Forward" === ip ? "plotsGame:journalNextPage" : "plotsGame:journalPreviousPage"),
          onClick: () => {
            Op(ip)
          },
          children: (0, Jp.jsx)(Up.d, {
            name: "angle-up"
          })
        })
      })
    }
    const Bc = {
      small: "plotsGame:journalTierSmall",
      medium: "plotsGame:journalTierMedium",
      large: "plotsGame:journalTierLarge"
    };

    function Nc(pp) {
      let {
        page: ip,
        building: cp,
        onBuild: Op,
        onPutAway: op
      } = pp;
      const {
        t: Ip
      } = (0, Dp.H)(), {
        displayName: Sp,
        tier: xp
      } = qp(ip.id), Lp = zp(ip.id, 0).cells.length, Yp = "locked" === ip.state, Ap = cp ? qc.f : qc.o;
      return (0, Jp.jsxs)("article", {
        className: Pp()("PlotsJournalPage", {
          Locked: Yp
        }),
        children: [(0, Jp.jsx)("h3", {
          className: "PlotsJournalPageName",
          children: Ip(Sp.translationKey)
        }), (0, Jp.jsxs)("div", {
          className: "PlotsJournalPageMeta",
          children: [Ip(Bc[xp]), " \xb7 ", Ip("plotsGame:journalBlocks", {
            blocks: String(Lp)
          })]
        }), (0, Jp.jsxs)("div", {
          className: "PlotsJournalSketch",
          children: [Rp.map((pp => (0, Jp.jsx)("img", {
            className: Pp()({
              Shown: pp === ip.id
            }),
            src: Ec[pp],
            alt: "",
            draggable: !1
          }, pp))), "completed" === ip.state && (0, Jp.jsx)("span", {
            className: "PlotsJournalStamp",
            children: Ip("plotsGame:journalBuilt")
          }), Yp && (0, Jp.jsx)("span", {
            className: "PlotsJournalLock",
            children: (0, Jp.jsx)(Up.d, {
              name: "lock"
            })
          })]
        }), null !== ip.note && (0, Jp.jsx)("p", {
          className: "PlotsJournalNote",
          children: Ip(ip.note)
        }), (0, Jp.jsxs)("div", {
          className: "PlotsJournalPageAction",
          children: ["locked" === ip.state && (0, Jp.jsx)("p", {
            className: "PlotsJournalHint",
            children: Ip("plotsGame:journalLocked", {
              name: Ip(qp(ip.unlockedBy).displayName.translationKey)
            })
          }), ip.active && (0, Jp.jsxs)(Jp.Fragment, {
            children: [(0, Jp.jsx)("p", {
              className: "PlotsJournalHint Building",
              children: Ip("plotsGame:journalBuilding")
            }), (0, Jp.jsx)(qc.j, {
              onClick: op,
              children: Ip("plotsGame:journalPutAway")
            })]
          }), !Yp && !ip.active && (0, Jp.jsx)(Ap, {
            onClick: () => {
              Op(ip.id)
            },
            children: Ip("plotsGame:placementBuild")
          })]
        })]
      })
    }

    function Tc(pp) {
      let {
        className: ip,
        page: cp,
        hidden: Op,
        building: op,
        journal: Ip
      } = pp;
      return (0, Jp.jsxs)("div", {
        ref: pp => {
          null !== pp && (pp.inert = Op)
        },
        className: Pp()("PlotsJournalSide", ip),
        children: [void 0 !== cp && (0, Jp.jsx)(Nc, {
          page: cp,
          building: op,
          onBuild: Ip.build,
          onPutAway: Ip.putAway
        }), void 0 === cp && (0, Jp.jsx)("div", {
          className: "PlotsJournalPage"
        })]
      })
    }
    var fc = cp(1927);

    function bc(pp) {
      return Math.cos((0, fc.o)(pp))
    }

    function hc(pp) {
      return (0, fc.C)(Math.acos(ki.d.clamp(pp, -1, 1)))
    }

    function ac(pp, ip, cp, Op, op) {
      const Ip = Math.abs(ip - pp),
        Sp = (0, fc.C)(op / (cp * Math.abs(Math.sin((0, fc.o)(pp))))),
        xp = 450 * Math.min(1, Ip / Op),
        Lp = Sp > 0 ? 3 * Ip / Sp : 1 / 0;
      return Math.round(Math.max(120, Math.min(xp, Lp)))
    }
    class nc {
      constructor() {
        this.samples = []
      }
      add(pp, ip) {
        for (this.samples.push({
            x: pp,
            at: ip
          }); ip - this.samples[0].at > 100;) this.samples.shift()
      }
      get() {
        const pp = this.samples[0],
          ip = this.samples[this.samples.length - 1];
        return ip.at > pp.at ? (ip.x - pp.x) / (ip.at - pp.at) : 0
      }
    }

    function Fc(pp) {
      return hc(new DOMMatrixReadOnly(getComputedStyle(pp).transform).m11)
    }

    function gc(pp, ip) {
      pp.style.transform = `rotateY(${-ip}deg)`, pp.classList.add("Turning")
    }

    function Gc(pp, ip, cp) {
      const [Op, op] = (0, Ip.useState)(cp), Sp = (0, Ip.useRef)(null), xp = (0, Ip.useRef)(null), Lp = (0, Ip.useRef)({
        Forward: null,
        Back: null
      }), Yp = ip ? 2 : 1, Dp = ip ? 180 : 90, Ap = Op - Op % Yp, Pp = Ap > 0, Wp = Ap + Yp < pp, yp = (0, Ip.useCallback)((() => {
        const pp = xp.current;
        return null === pp ? Ap : (xp.current = null, pp.animation.cancel(), (ip = Lp.current[pp.direction]).style.transform = "", ip.classList.remove("Turning"), null === pp.next ? Ap : (op(pp.next), pp.next));
        var ip
      }), [Ap]), Up = (0, Ip.useCallback)(((pp, ip, cp, Op) => {
        const op = Lp.current[pp],
          Ip = Fc(op),
          Sp = ip === ("Forward" === pp) ? Dp : 0;
        gc(op, Sp);
        const Ap = op.animate([{
          transform: `rotateY(${-Ip}deg)`
        }, {
          transform: `rotateY(${-Sp}deg)`
        }], {
          duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : ac(Ip, Sp, op.offsetWidth, Dp, Sp > Ip ? -cp : cp),
          easing: "cubic-bezier(0.25, 0.75, 0.5, 1)"
        });
        xp.current = {
          direction: pp,
          animation: Ap,
          next: ip ? Op + ("Forward" === pp ? Yp : -Yp) : null
        }, Ap.onfinish = () => {
          var pp;
          (null === (pp = xp.current) || void 0 === pp ? void 0 : pp.animation) === Ap && yp()
        }
      }), [Yp, Dp, yp]), wp = (0, Ip.useCallback)((ip => {
        if (null !== Sp.current) return;
        const cp = yp();
        ("Forward" === ip ? cp + Yp < pp : cp > 0) && Up(ip, !0, 0, cp)
      }), [yp, Up, Yp, pp]);
      (0, Ip.useEffect)((() => () => {
        var pp;
        null === (pp = xp.current) || void 0 === pp || pp.animation.cancel()
      }), []), (0, Ip.useEffect)((() => {
        const pp = pp => {
          var ip;
          pp.pointerId !== (null === (ip = Sp.current) || void 0 === ip ? void 0 : ip.pointerId) || Sp.current.following || (Sp.current = null)
        };
        return window.addEventListener("pointerup", pp), () => {
          window.removeEventListener("pointerup", pp)
        }
      }), []);
      const vp = (pp, ip, cp) => {
          const Op = function(pp, ip, cp, Op) {
            return (pp < 0 ? cp : Op) ? ki.d.clampAbs(pp, ip) : Math.sign(pp) * ip * (1 - 1 / (.55 * Math.abs(pp) / ip + 1))
          }(pp.base + cp, Yp * pp.width, Wp, Pp);
          return "Forward" === ip ? Math.min(Op, 0) : Math.max(Op, 0)
        },
        tp = (pp, ip) => {
          const cp = Sp.current;
          if (Sp.current = null, null === cp.direction) return;
          cp.speed.add(pp, ip);
          const Op = cp.speed.get(),
            op = vp(cp, cp.direction, pp - cp.x);
          Up(cp.direction, null !== function(pp, ip, cp, Op, op) {
            if (Math.abs(ip) >= .3 ? Math.sign(ip) !== Math.sign(pp) : Math.abs(pp) < .5 * cp) return null;
            const Ip = pp < 0 ? "Forward" : "Back";
            return ("Forward" === Ip ? Op : op) ? Ip : null
          }(op, Op, Yp * cp.width, Wp, Pp), Op, Ap)
        },
        Hp = {
          onPointerDown: pp => {
            var ip;
            if (!pp.isPrimary || 0 !== pp.button || null !== xp.current && null !== pp.target.closest("button")) return;
            const cp = new nc;
            cp.add(pp.clientX, pp.timeStamp);
            const Op = Lp.current.Forward.offsetWidth,
              op = xp.current;
            xp.current = null;
            let Ip = 0;
            if (null !== op) {
              const ip = Lp.current[op.direction],
                cp = Fc(ip);
              op.animation.cancel(), gc(ip, cp), Ip = function(pp, ip, cp, Op) {
                return (pp < 0 ? cp : Op) ? pp : Math.sign(pp) * ip * (1 / (1 - Math.min(Math.abs(pp) / ip, .99)) - 1) / .55
              }(function(pp, ip, cp, Op) {
                return cp * (bc(ip) - bc("Forward" === pp ? 0 : Op))
              }(op.direction, cp, Op, Dp), Yp * Op, Wp, Pp), pp.currentTarget.setPointerCapture(pp.pointerId)
            }
            Sp.current = {
              pointerId: pp.pointerId,
              x: pp.clientX,
              y: pp.clientY,
              base: Ip,
              width: Op,
              following: null !== op,
              direction: null !== (ip = null === op || void 0 === op ? void 0 : op.direction) && void 0 !== ip ? ip : null,
              speed: cp
            }
          },
          onPointerMove: pp => {
            const ip = Sp.current;
            if (null === ip || pp.pointerId !== ip.pointerId) return;
            if (0 === pp.buttons) return void tp(pp.clientX, pp.timeStamp);
            const cp = pp.clientX - ip.x;
            !ip.following && function(pp, ip) {
              return Math.abs(pp) > 8 && Math.abs(pp) > Math.abs(ip)
            }(cp, pp.clientY - ip.y) && (ip.following = !0, ip.direction = cp < 0 ? "Forward" : "Back", pp.currentTarget.setPointerCapture(pp.pointerId)), null !== ip.direction && (ip.speed.add(pp.clientX, pp.timeStamp), gc(Lp.current[ip.direction], function(pp, ip, cp, Op) {
              const op = cp * bc("Forward" === pp ? 0 : Op) + ip;
              return ki.d.clamp(hc(op / cp), 0, Op)
            }(ip.direction, vp(ip, ip.direction, cp), ip.width, Dp)))
          },
          onPointerUp: pp => {
            var ip;
            pp.pointerId === (null === (ip = Sp.current) || void 0 === ip ? void 0 : ip.pointerId) && tp(pp.clientX, pp.timeStamp)
          },
          onPointerCancel: pp => {
            const ip = Sp.current;
            pp.pointerId === (null === ip || void 0 === ip ? void 0 : ip.pointerId) && (Sp.current = null, null !== ip.direction && Up(ip.direction, !1, 0, Ap))
          }
        };
      return {
        first: Ap,
        step: Yp,
        canGoBack: Pp,
        canGoForward: Wp,
        turnPage: wp,
        leaves: Lp,
        pagesHandlers: Hp
      }
    }

    function rc(pp, ip) {
      return pp > ip && pp >= 600
    }

    function Zc(pp) {
      let {
        journal: ip,
        hud: cp,
        guide: Op
      } = pp;
      const {
        t: op
      } = (0, Dp.H)(), xp = (0, Lp.i)(lp, ip.getPages()), Yp = (0, Lp.i)(Oi, cp.getGuide()), Ap = xp.find((pp => pp.active)), Wp = (yp = Yp, Up = void 0 === Ap ? null : Ap.id, "active" === yp[0] && null === Up);
      var yp, Up;
      const wp = (0, Cc.m)(rc),
        {
          first: vp,
          step: dp,
          canGoBack: ep,
          canGoForward: jp,
          turnPage: kp,
          leaves: mp,
          pagesHandlers: Rp
        } = Gc(xp.length, wp, (() => function(pp) {
          const ip = pp.findIndex((pp => pp.active));
          return -1 !== ip ? ip : Math.max(0, pp.findIndex((pp => "open" === pp.state)))
        }(xp)));
      (0, Ip.useEffect)((() => {
        ip.onOpened()
      }), [ip]), (0, tp.b)((pp => !Wp && ("ArrowLeft" === pp.code || "ArrowRight" === pp.code) && !(0, Hp.isTypingInInput)()), (pp => {
        pp.stopPropagation(), kp("ArrowLeft" === pp.code ? "Back" : "Forward")
      }));
      const qp = void 0 !== Ap,
        Mp = (pp, cp, Op) => (0, Jp.jsx)(Tc, {
          className: pp,
          page: cp >= 0 && cp < xp.length ? xp[cp] : void 0,
          hidden: Op,
          building: qp,
          journal: ip
        });
      return (0, Jp.jsx)(Mc.c, {
        close: Sp.l,
        togglePointerLock: !1,
        className: "PlotsJournalOverlay",
        children: (0, Jp.jsxs)("section", {
          className: Pp()("PlotsJournal", {
            Spread: wp
          }),
          role: "dialog",
          "aria-modal": "true",
          "aria-label": op("plotsGame:journalTitle"),
          children: [(0, Jp.jsx)(qc.l, {
            className: "PlotsJournalClose",
            onClick: Sp.l
          }), "active" === Yp[0] && (0, Jp.jsx)(Di, {
            className: "PlotsJournalGuideSkip",
            onSkip: Op.skip
          }), Wp && (0, Jp.jsx)(Qc, {
            onBuild: ip.build
          }), !Wp && (0, Jp.jsx)(Jc, {
            direction: "Back",
            disabled: !ep,
            onTurn: kp
          }), (0, Jp.jsx)("div", {
            hidden: Wp,
            className: "PlotsJournalBookPages",
            ...Rp,
            children: (0, Jp.jsxs)("div", {
              className: "PlotsJournalSheet",
              children: [wp && Mp("Left", vp - 2, !0), Mp("Right", vp + 2 * dp - 1, !0), (0, Jp.jsxs)("div", {
                ref: pp => {
                  mp.current.Back = pp
                },
                className: "PlotsJournalLeaf Back",
                children: [Mp("Recto", vp - 1, !0), wp && Mp("Verso", vp, !1)]
              }), (0, Jp.jsxs)("div", {
                ref: pp => {
                  mp.current.Forward = pp
                },
                className: "PlotsJournalLeaf Forward",
                children: [Mp("Recto", vp + dp - 1, !1), wp && Mp("Verso", vp + dp, !0)]
              })]
            })
          }), !Wp && (0, Jp.jsx)(Jc, {
            direction: "Forward",
            disabled: !jp,
            onTurn: kp
          })]
        })
      })
    }

    function zc(pp, ip, cp, Op, op) {
      const Ip = Math.hypot(...ip.dir);
      if (!Number.isFinite(Ip) || 0 === Ip) return -1;
      const {
        from: Sp,
        reach: xp,
        solid: Lp
      } = ip, Yp = [ip.dir[0] / Ip, ip.dir[1] / Ip, ip.dir[2] / Ip], Dp = null === Lp ? xp : Math.min(xp, function(pp, ip, cp) {
        const Op = sc(pp, ip, cp);
        if (Op !== 1 / 0) return Op;
        return (cp[0] + .5 - pp[0]) * ip[0] + (cp[1] + .5 - pp[1]) * ip[1] + (cp[2] + .5 - pp[2]) * ip[2]
      }(Sp, Yp, Lp) + .75);
      let Ap = -1,
        Pp = 1 / 0,
        Wp = 1 / 0;
      for (let yp = 0; yp < pp.length; yp += 4) {
        const ip = [pp[yp], pp[yp + 1], pp[yp + 2]],
          Ip = op(yp) ? xp : Dp;
        let Lp = -1,
          Up = sc(Sp, Yp, ip);
        if (Up > Ip) {
          const pp = [ip[0] + .5 - Sp[0], ip[1] + .5 - Sp[1], ip[2] + .5 - Sp[2]];
          if (Up = pp[0] * Yp[0] + pp[1] * Yp[1] + pp[2] * Yp[2], Up <= 0 || Up > Ip) continue;
          if (Lp = Math.hypot(pp[0] - Up * Yp[0], pp[1] - Up * Yp[1], pp[2] - Up * Yp[2]), Lp > .7 || !Op(yp)) continue
        }(Lp < Pp || Lp === Pp && Up < Wp) && cp(yp) && (Ap = yp, Pp = Lp, Wp = Up)
      }
      return Ap
    }

    function sc(pp, ip, cp) {
      let Op = 0,
        op = 1 / 0;
      for (let Ip = 0; Ip < 3; Ip++) {
        const Sp = cp[Ip] - pp[Ip];
        if (0 === ip[Ip]) {
          if (Sp > 0 || Sp + 1 < 0) return 1 / 0;
          continue
        }
        const xp = Sp / ip[Ip],
          Lp = (Sp + 1) / ip[Ip];
        Op = Math.max(Op, Math.min(xp, Lp)), op = Math.min(op, Math.max(xp, Lp))
      }
      return Op <= op ? Op : 1 / 0
    }
    var Kc = cp(37099),
      Vc = cp(38281);
    const pO = [1, 1, 1];
    class iO {
      constructor(pp) {
        this.api = pp, this.meshes = null, this.shown = null
      }
      show(pp) {
        if (!(0, Kc.i)(pp, this.shown))
          if (this.shown = null === pp ? null : [pp[0], pp[1], pp[2]], null !== this.meshes)
            for (const ip of this.meshes) this.api.setGameMesh(ip, null === pp ? {
              visible: !1
            } : {
              anchor: pp,
              visible: !0
            });
          else if (null !== pp) {
          const ip = [Vc.h, Vc.h, Vc.h, 0, 0, 0];
          this.meshes = [this.build([ip], Vc.i, pp), this.build((0, Vc.e)(), Vc.o, pp)]
        }
      }
      dispose() {
        for (const ip of null !== (pp = this.meshes) && void 0 !== pp ? pp : []) {
          var pp;
          this.api.disposeGameMesh(ip)
        }
        this.meshes = null, this.shown = null
      }
      build(pp, ip, cp) {
        const Op = [],
          op = [];
        for (const [Ip, Sp, xp, Lp, Yp, Dp] of pp)(0, zi.e)(Op, op, [Lp + .5, Yp + .5, Dp + .5], [Ip, Sp, xp]);
        return this.api.createGameMesh({
          positions: Op,
          indices: op
        }, {
          rgb: pO,
          alpha: ip,
          onTop: !0
        }, cp)
      }
    }

    function cO(pp, ip) {
      const cp = ri.g.Kw / 2;
      return pp[0] < ip[0] + cp && pp[0] + 1 > ip[0] - cp && pp[1] < ip[1] + ri.g.Vw && pp[1] + 1 > ip[1] && pp[2] < ip[2] + cp && pp[2] + 1 > ip[2] - cp
    }

    function OO(pp, ip) {
      return pp.getClientOption(ip, "blockReach") + 1
    }
    class oO {
      constructor(pp, ip, cp) {
        this.api = pp, this.localPlayerId = ip, this.foreseen = cp, this.cells = [], this.playerCells = [], this.next = null
      }
      get() {
        return this.next
      }
      setCells(pp) {
        this.cells = pp
      }
      playerMoved() {
        return IO(this.api.getPositionView(this.localPlayerId)).some(((pp, ip) => pp !== this.playerCells[ip]))
      }
      SW(pp) {
        const ip = this.api.getPositionView(this.localPlayerId);
        return this.playerCells.splice(0, 1 / 0, ...IO(ip)), this.next = this.pickFrom(null === pp ? [ip[0], ip[1] + 1, ip[2]] : (0, Kc.e)(pp), (() => !1)), this.next
      }
      pickFrom(pp, ip) {
        const cp = this.api.getPositionView(this.localPlayerId),
          Op = [cp[0], cp[1] + ri.g.Vw * ri.g.playerEyeToHeightRatio, cp[2]],
          op = OO(this.api, this.localPlayerId),
          {
            cells: Ip
          } = this,
          Sp = pp => [Ip[pp], Ip[pp + 1], Ip[pp + 2]],
          xp = function(pp, ip, cp, Op, op, Ip) {
            let Sp = -1,
              xp = -1,
              Lp = 1 / 0;
            for (let Yp = 0; Yp < pp.length; Yp += ip) {
              const ip = (Ip(Yp) ? 2 : 0) + (Op(Yp) ? 1 : 0);
              if (ip < xp || op(Yp)) continue;
              const Dp = (pp[Yp] + .5 - cp[0]) ** 2 + (pp[Yp + 1] + .5 - cp[1]) ** 2 + (pp[Yp + 2] + .5 - cp[2]) ** 2;
              (ip > xp || Dp < Lp) && (Sp = Yp, xp = ip, Lp = Dp)
            }
            return Sp
          }(Ip, 4, pp, (pp => 1 === Ip[pp + 3]), (pp => {
            const Op = Sp(pp);
            return cO(Op, cp) || this.foreseen.has(Op.join()) || ip(Op)
          }), (pp => function(pp, ip, cp) {
            return (ip[0] + .5 - pp[0]) ** 2 + (ip[1] + .5 - pp[1]) ** 2 + (ip[2] + .5 - pp[2]) ** 2 <= cp ** 2
          }(Op, Sp(pp), op)));
        return -1 === xp ? null : Sp(xp)
      }
    }

    function IO(pp) {
      let [ip, cp, Op] = pp;
      const op = ri.g.Kw / 2;
      return [Math.floor(ip), Math.floor(cp), Math.floor(Op), Math.floor(ip - op), Math.floor(ip + op), Math.floor(cp + ri.g.Vw), Math.floor(Op - op), Math.floor(Op + op)]
    }
    class SO {
      constructor(pp, ip, cp) {
        this.api = pp, this.localPlayerId = ip, this.pickNext = cp, this.turning = null, this.pending = null, this.lastFillMs = -1 / 0, this.tap = null, this.heading = [0, 1]
      }
      look(pp) {
        const [ip, , cp] = pp.cameraDirection, Op = Math.hypot(ip, cp);
        Op > .001 && (this.heading = [ip / Op, cp / Op])
      }
      tapped(pp, ip, cp) {
        const Op = OO(this.api, this.localPlayerId),
          {
            origin: op,
            direction: Ip
          } = this.api.getActionRay(),
          Sp = [...op],
          xp = [
            [Sp, [Sp[0] + Ip[0] * Op, Sp[1] + Ip[1] * Op, Sp[2] + Ip[2] * Op]]
          ];
        null !== pp && xp.push([Sp, (0, Kc.e)(pp)]), this.tap = {
          lines: xp,
          next: ip,
          ms: cp
        }
      }
      filled(pp, ip) {
        this.tap = null, this.turnFrom(pp, ip), this.retry(ip)
      }
      arrived(pp, ip) {
        const {
          tap: cp
        } = this;
        if (null === cp || ip - cp.ms > 1500) return null;
        const Op = (0, Kc.e)(pp);
        return (0, Kc.i)(cp.next, pp) || cp.lines.some((pp => {
          let [ip, cp] = pp;
          return function(pp, ip, cp) {
            const Op = [cp[0] - ip[0], cp[1] - ip[1], cp[2] - ip[2]],
              op = [pp[0] - ip[0], pp[1] - ip[1], pp[2] - ip[2]],
              Ip = Op[0] ** 2 + Op[1] ** 2 + Op[2] ** 2,
              Sp = 0 === Ip ? 0 : Math.min(1, Math.max(0, (op[0] * Op[0] + op[1] * Op[1] + op[2] * Op[2]) / Ip));
            return Math.hypot(op[0] - Op[0] * Sp, op[1] - Op[1] * Sp, op[2] - Op[2] * Sp)
          }(Op, ip, cp) <= .9
        })) ? (this.tap = null, this.turnFrom(pp, ip), cp.ms) : null
      }
      turnFrom(pp, ip) {
        this.pending = {
          from: pp,
          ms: ip,
          turnMs: Math.max(50, Math.min(250, ip - this.lastFillMs))
        }, this.lastFillMs = ip
      }
      retry(pp) {
        const {
          pending: ip
        } = this;
        if (null === ip) return;
        if (pp - ip.ms > 1500) return void(this.pending = null);
        const cp = this.pickNext((0, Kc.e)(ip.from), (pp => (0, Kc.i)(pp, ip.from)));
        if (null === cp) return;
        this.pending = null;
        const {
          turning: Op
        } = this;
        if (null !== Op && pp < Op.endMs && (0, Kc.i)(Op.to, cp)) return;
        const op = this.api.getActionRay().origin,
          Ip = [cp[0] + .5 - op[0], cp[1] + .5 - op[1], cp[2] + .5 - op[2]],
          Sp = Math.hypot(Ip[0], Ip[2]);
        if (Sp < .3) {
          const pp = Math.max(Sp, .001);
          Ip[0] = this.heading[0] * pp, Ip[2] = this.heading[1] * pp
        }
        this.api.turnCamera(Ip, ip.turnMs), this.turning = {
          to: cp,
          endMs: pp + ip.turnMs
        }
      }
    }
    class xO {
      constructor(pp, ip, cp, Op) {
        this.api = pp, this.localPlayerId = ip, this.juice = cp, this.tracker = Op, this.ghostCells = [], this.palette = [], this.blockIds = [], this.occupiedCells = [], this.blueprint = "", this.layerY = 0, this.topLayerY = 0, this.layerCells = new Map, this.open = new Set, this.lastFilled = null, this.lastSeenFilled = null, this.aimed = null, this.altMs = null, this.pressFilled = !1, this.foreseen = new Map, this.turn = void 0, this.nextCell = void 0, this.chunkWatch = void 0, this.meshes = void 0, this.outline = void 0, this.chunkWatch = new Zi(pp), this.meshes = new cc(pp), this.outline = new iO(pp), this.nextCell = new oO(pp, ip, this.foreseen), this.turn = new SO(pp, ip, ((pp, ip) => this.nextCell.pickFrom(pp, ip)))
      }
      Ey(pp) {
        const ip = "active" === pp[0] ? `${pp[1]}|${pp[3]}|${pp[4]}|${pp[5]}|${pp[6]}` : "";
        if ("active" !== pp[0]) "built" === pp[0] && "" !== this.blueprint && this.finishLayer(1 / 0), this.ghostCells = [], this.palette = [], this.occupiedCells = [];
        else {
          const [, , , , , , , cp, Op, op, Ip] = pp;
          ip !== this.blueprint ? (this.layerCells.clear(), this.topLayerY = cp) : cp === this.layerY ? this.burstUnlisted(Op) : cp > this.layerY && this.finishLayer(cp), this.layerY = cp, this.layerCells.has(cp) || this.layerCells.set(cp, Op.filter(LO)), this.ghostCells = Op, this.palette = op, this.occupiedCells = Ip
        }
        ip !== this.blueprint && (this.tracker.show("active" === pp[0] && pp[2] ? {
          id: pp[1],
          y: pp[4]
        } : null), this.blueprint = ip, this.open.clear(), this.foreseen.clear(), this.lastFilled = null, this.lastSeenFilled = null), this.blockIds = this.palette.map((pp => this.api.blockNameToBlockId(pp))), this.chunkWatch.watch([...this.ghostCells.filter(LO), ...this.occupiedCells]), this.refresh()
      }
      finishLayer(pp) {
        this.burstUnlisted([]), pp > this.topLayerY && (this.juice.layerDone(this.layerCells.get(this.topLayerY)), this.topLayerY = pp)
      }
      LP() {
        if (this.chunkWatch.changed()) return void this.refresh();
        const pp = performance.now();
        let ip = !1;
        for (const [Op, op] of this.foreseen) {
          var cp;
          if (pp - op > 1e3) this.foreseen.delete(Op), ip = !0, (null === (cp = this.lastFilled) || void 0 === cp ? void 0 : cp.join()) === Op && (this.lastFilled = this.lastSeenFilled)
        }(ip || this.nextCell.playerMoved()) && this.showNext()
      }
      dispose() {
        this.meshes.dispose(), this.outline.dispose()
      }
      burstUnlisted(pp) {
        const ip = new Set;
        for (let op = 0; op < pp.length; op += 4) ip.add(`${pp[op]},${pp[op+1]},${pp[op+2]}`);
        const cp = [],
          {
            ghostCells: Op
          } = this;
        for (let op = 0; op < Op.length; op += 4) {
          const pp = `${Op[op]},${Op[op+1]},${Op[op+2]}`;
          !ip.has(pp) && this.open.delete(pp) && cp.push(this.filledCell(op))
        }
        this.burst(cp)
      }
      refresh() {
        const {
          ghostCells: pp,
          palette: ip,
          occupiedCells: cp
        } = this, Op = new ic, op = new Set, Ip = [], Sp = [];
        let xp = 0;
        for (let Lp = 0; Lp < pp.length; Lp += 4) {
          const [cp, Yp, Dp, Ap] = [pp[Lp], pp[Lp + 1], pp[Lp + 2], pp[Lp + 3]], Pp = this.api.getBlockId(cp, Yp, Dp), Wp = `${cp},${Yp},${Dp}`, yp = Qi(this.blockIds[Ap], Pp);
          !yp && Ji(Pp) ? Op.add(cp, Yp, Dp, Ni(ip[Ap]), Ki, Gi(ip[Ap])) : yp ? this.open.has(Wp) && Ip.push(this.filledCell(Lp)) : Op.add(cp, Yp, Dp, pc, Vi), yp || xp++, !yp && this.api.isBlockInLoadedChunk(cp, Yp, Dp) && (op.add(Wp), Sp.push(cp, Yp, Dp, Ji(Pp) ? 0 : 1))
        }
        this.open = op, this.nextCell.setCells(Sp), this.tracker.update(this.layerY, this.topLayerY, xp);
        for (let Lp = 0; Lp < cp.length; Lp += 3) {
          const [pp, ip, op] = [cp[Lp], cp[Lp + 1], cp[Lp + 2]];
          Ji(this.api.getBlockId(pp, ip, op)) || Op.add(pp, ip, op, pc, Vi)
        }
        this.meshes.show(Op.toArray()), this.burst(Ip), this.showNext(), this.turn.retry(performance.now())
      }
      burst(pp) {
        const ip = performance.now(),
          cp = [];
        for (const [op, Ip, Sp] of pp) {
          const pp = [op, Ip, Sp];
          this.lastSeenFilled = pp, this.foreseen.delete(pp.join()) || cp.push(pp)
        }
        const Op = this.isHolding(ip);
        for (const op of cp) {
          if (this.lastFilled = op, Op && this.pressFilled) {
            this.turn.filled(op, ip);
            continue
          }
          const pp = this.turn.arrived(op, ip);
          if (null !== pp) {
            this.pressFilled = Op;
            for (const [ip, cp] of this.foreseen) cp <= pp && this.foreseen.delete(ip)
          }
        }
        this.juice.filled(pp)
      }
      showNext() {
        var pp;
        this.outline.show(null !== (pp = this.aimed) && void 0 !== pp ? pp : this.nextCell.SW(this.lastFilled))
      }
      afterRender(pp) {
        var ip;
        this.turn.look(pp);
        const cp = this.api.getTargetedBlock();
        this.aimed = this.pressFilled && this.isHolding(performance.now()) ? null : this.findAimed(null === cp ? null : cp.position), this.outline.show(null !== (ip = this.aimed) && void 0 !== ip ? ip : this.nextCell.get())
      }
      isHolding(pp) {
        return null !== this.altMs && pp - this.altMs <= 500
      }
      attemptAltAction(pp) {
        const ip = performance.now();
        if (this.isHolding(ip) || (this.pressFilled = !1), this.altMs = ip, this.pressFilled) return "preventPlacement";
        const cp = this.findAimed(pp);
        if (null !== cp) return this.foreseen.set(cp.join(), ip), this.lastFilled = cp, this.aimed = null, this.showNext(), this.turn.filled(cp, ip), this.pressFilled = !0, "preventPlacement";
        {
          const cp = this.nextCell.get();
          null !== cp && this.turn.tapped(pp, cp, ip)
        }
      }
      holdPressOnEntity() {
        const pp = performance.now();
        this.pressFilled && this.isHolding(pp) && (this.altMs = pp)
      }
      findAimed(pp) {
        return function(pp, ip, cp, Op, op, Ip, Sp) {
          const xp = pp.Acp(ip),
            Lp = null === xp || null === pp.blockNameToBlockId(xp.name, !0) ? null : xp.name,
            Yp = pp.getPositionView(ip),
            {
              origin: Dp,
              direction: Ap
            } = pp.getActionRay(),
            Pp = zc(Op, {
              from: Dp,
              dir: Ap,
              reach: OO(pp, ip),
              solid: cp
            }, (ip => {
              const cp = [Op[ip], Op[ip + 1], Op[ip + 2]];
              return !Qi(op[Op[ip + 3]], pp.getBlockId(...cp)) && !Sp.has(cp.join()) && pp.isBlockInLoadedChunk(...cp) && !cO(cp, Yp)
            }), (pp => null === Lp || Lp === Bi(op[Op[pp + 3]])), (pp => null !== Ip && Op[pp] === Ip[0] && Op[pp + 1] === Ip[1] && Op[pp + 2] === Ip[2]));
          return -1 === Pp ? null : [Op[Pp], Op[Pp + 1], Op[Pp + 2]]
        }(this.api, this.localPlayerId, pp, this.ghostCells, this.blockIds, this.nextCell.get(), this.foreseen)
      }
      endPress() {
        this.altMs = null, this.pressFilled = !1
      }
      filledCell(pp) {
        const {
          ghostCells: ip
        } = this, [cp, Op, op] = Ni(this.palette[ip[pp + 3]]);
        return [ip[pp], ip[pp + 1], ip[pp + 2], cp, Op, op]
      }
    }

    function LO(pp, ip) {
      return ip % 4 !== 3
    }
    class YO {
      constructor(pp) {
        this.api = pp, this.sent = !1
      }
      LP() {
        this.sent || xp.c.get("loadingOverlayVisible") || (this.sent = !0, this.api.sendCommand("plotsentered"))
      }
    }
    var DO = cp(4341),
      AO = cp(39330);

    function PO(pp, ip, cp) {
      const Op = [255 * pp, 255 * ip, 255 * cp],
        [op, Ip, Sp] = Op.map((pp => pp + .4 * (255 - pp)));
      return {
        texture: "square_particle",
        TA: 48,
        minLifeTime: .3 / AO.e,
        maxLifeTime: .55 / AO.e,
        minSize: .07,
        maxSize: .14,
        minEmitPower: 1,
        maxEmitPower: 1,
        emitRate: 0,
        gravity: [0, -14 * AO.e * AO.e, 0],
        colorGradients: [{
          timeFraction: 0,
          minColor: [...Op, 1],
          maxColor: [op, Ip, Sp, 1]
        }, {
          timeFraction: 1,
          minColor: [...Op, 0],
          maxColor: [op, Ip, Sp, 0]
        }],
        blendMode: DO.g.Standard
      }
    }
    const WO = {
      texture: "glint",
      mipmaps: !1,
      TA: 96,
      minLifeTime: .5 / AO.e,
      maxLifeTime: .9 / AO.e,
      minSize: .15,
      maxSize: .3,
      minEmitPower: 1,
      maxEmitPower: 1,
      emitRate: 0,
      gravity: [0, 2 * AO.e * AO.e, 0],
      colorGradients: [{
        timeFraction: 0,
        minColor: [255, 224, 97, 1],
        maxColor: [255, 166, 38, 1]
      }, {
        timeFraction: 1,
        minColor: [0, 0, 0, 1]
      }],
      blendMode: DO.g.OneOne
    };
    class yO {
      constructor(pp, ip) {
        this.api = pp, this.localPlayerId = ip, this.chips = new Map, this.sparkles = null, this.points = new Float32Array(384)
      }
      filled(pp) {
        if (this.api.particlesEnabled())
          for (const [ip, cp, Op, op, Ip, Sp] of pp.slice(0, 3)) {
            const pp = `${op},${Ip},${Sp}`;
            let xp = this.chips.get(pp);
            void 0 === xp && (xp = this.api.createParticles(PO(op, Ip, Sp), {
              pos: [ip + .5, cp + .5, Op + .5]
            }), this.chips.set(pp, xp));
            for (let ip = 0; ip < 8; ip++) this.setPoint(ip, .9 * (Math.random() - .5), .9 * (Math.random() - .5), .9 * (Math.random() - .5), 1.5 + 1.5 * Math.random());
            xp.emitPoints([ip + .5, cp + .5, Op + .5], this.points, 8)
          }
      }
      layerDone(pp) {
        this.api.playSound(this.localPlayerId, "magicAccent2", .7, 1.1);
        const ip = pp.length / 3;
        if (0 === ip || !this.api.particlesEnabled()) return;
        const cp = Math.min(ip, 48),
          [Op, op, Ip] = [pp[0] + .5, pp[1] + 1, pp[2] + .5];
        let Sp = 0;
        for (let xp = 0; xp < cp; xp++) {
          const Lp = 3 * Math.floor(xp * ip / cp);
          for (let ip = 0; ip < 2; ip++) this.setPoint(Sp++, pp[Lp] + Math.random() - Op, pp[Lp + 1] + 1 - op, pp[Lp + 2] + Math.random() - Ip, .6 + .8 * Math.random())
        }
        this.sparkles ??= this.api.createParticles(WO, {
          pos: [Op, op, Ip]
        }), this.sparkles.emitPoints([Op, op, Ip], this.points, Sp)
      }
      dispose() {
        var pp;
        for (const ip of this.chips.values()) ip.stop();
        this.chips.clear(), null === (pp = this.sparkles) || void 0 === pp || pp.stop(), this.sparkles = null
      }
      setPoint(pp, ip, cp, Op, op) {
        const Ip = 4 * pp;
        this.points[Ip] = ip, this.points[Ip + 1] = cp, this.points[Ip + 2] = Op, this.points[Ip + 3] = op
      }
    }
    const UO = "SpecialAction1",
      wO = "KeyY",
      vO = "KeyX";

    function tO(pp) {
      let {
        placement: ip
      } = pp;
      const cp = (0, Lp.i)(Dc, ip.getView()),
        {
          t: Op
        } = (0, Dp.H)(),
        {
          isTouchScreen: op
        } = (0, xp.o)(["isTouchScreen"]),
        Sp = (0, Ip.useContext)(ep),
        Ap = null !== cp,
        Up = Ap && !cp.blocked && !cp.waiting;
      if ((0, tp.b)((pp => Ap && !pp.repeat && !(0, Hp.isTypingInInput)() && !(0, Wp.l)() && !op), (pp => {
          const cp = function(pp, ip, cp) {
            if (pp === vO) return ip.stop;
            if (pp === wO) return cp ? ip.build : dO;
            return Yp.t[UO].includes(pp) ? ip.rotate : null
          }(pp.code, ip, Up);
          null !== cp && (pp.stopPropagation(), cp())
        })), !Ap) return null;
      let wp = op ? "plotsGame:placementHintTouch" : "plotsGame:placementHint";
      return cp.blocked ? wp = "plotsGame:placementOffPlot" : cp.toClear > 0 ? wp = "plotsGame:placementClear" : "placeSpot" !== Sp.hint && "placeBuild" !== Sp.hint || (wp = null), (0, Jp.jsx)(yp.h, {
        placement: "bottom",
        children: (0, Jp.jsxs)("div", {
          ref: Sp.placementCardRef,
          className: "PlotsPlacementCard",
          children: [(0, Jp.jsx)("div", {
            className: "PlotsPlacementCardTitle SmallTextBold",
            children: Op(qp(cp.id).displayName.translationKey)
          }), null !== wp && (0, Jp.jsx)("div", {
            className: Pp()("PlotsPlacementCardHint SmallTextLight", {
              Nudge: cp.refusals > 0
            }),
            children: Op(wp)
          }, cp.refusals), (0, Jp.jsxs)("div", {
            className: "PlotsPlacementCardButtons",
            children: [(0, Jp.jsxs)(qc.f, {
              onClick: ip.rotate,
              children: [(0, Jp.jsx)(HO, {
                noaAction: UO
              }), Op("plotsGame:placementRotate")]
            }), (0, Jp.jsxs)(qc.K, {
              onClick: ip.stop,
              children: [(0, Jp.jsx)(HO, {
                keyCode: vO
              }), Op("general:cancel")]
            }), (0, Jp.jsx)("span", {
              ref: Sp.buildRef,
              className: Pp()("PlotsPlacementBuild", {
                Pulse: "placeBuild" === Sp.hint && Up && op
              }),
              children: (0, Jp.jsxs)(qc.o, {
                disabled: !Up,
                onClick: ip.build,
                children: [(0, Jp.jsx)(HO, {
                  keyCode: wO
                }), Op("plotsGame:placementBuild")]
              })
            })]
          })]
        })
      })
    }

    function HO(pp) {
      return (0, Jp.jsx)(vp.d, {
        className: "PlotsPlacementKey",
        ...pp
      })
    }

    function dO() {}
    var eO = cp(2429),
      uO = cp(36879),
      jO = cp(2004),
      kO = cp(1276);
    const mO = {
      own: "crown",
      shared: "user-group",
      other: "house"
    };

    function RO(pp) {
      let {
        hud: ip
      } = pp;
      const cp = (0, Lp.i)(ci, ip.getPlot()),
        [Op, op] = (0, Ip.useState)(null),
        Sp = (0, uO.m)(Op);
      if ("none" === cp[0]) return null;
      const [, xp, Yp, Dp, Ap, Wp] = cp;
      return (0, Jp.jsx)("div", {
        className: Pp()("PlotsPlotBannerContainer", {
          Below: Sp
        }),
        children: (0, Jp.jsx)(qO, {
          plotX: xp,
          plotZ: Yp,
          ownerName: Dp,
          ownerId: Ap,
          relation: Wp,
          plaqueRef: op
        }, `${xp},${Yp}`)
      })
    }

    function qO(pp) {
      var ip, cp;
      let {
        plotX: Op,
        plotZ: op,
        ownerName: Ip,
        ownerId: Sp,
        relation: xp,
        plaqueRef: Lp
      } = pp;
      const {
        t: Yp
      } = (0, Dp.H)(), Ap = (0, jO.g)("hiddenPlayerNames"), Wp = (0, jO.g)("players"), yp = null === Sp ? null : null !== (ip = null === (cp = Wp.byId[Sp]) || void 0 === cp ? void 0 : cp.cosmetics) && void 0 !== ip ? ip : null, wp = Yp("plotsGame:plotBannerCoords", {
        x: Op,
        z: op
      }), vp = "own" === xp || null !== Ip;
      return (0, Jp.jsxs)("div", {
        ref: Lp,
        className: Pp()("PlotsPlotBanner", {
          Own: "own" === xp,
          Shared: "shared" === xp
        }),
        role: "status",
        children: [(0, Jp.jsxs)("span", {
          className: Pp()("PlotsPlotBannerSeal", {
            Face: null !== yp
          }),
          children: [null !== yp && (0, Jp.jsx)(eO.c, {
            cosmetics: yp
          }), null === yp && (0, Jp.jsx)(Up.d, {
            name: mO[xp]
          })]
        }), (0, Jp.jsxs)("div", {
          className: "PlotsPlotBannerText",
          children: [(0, Jp.jsxs)("div", {
            className: "PlotsPlotBannerTitle SmallTextBold",
            children: ["own" === xp && Yp("plotsGame:plotBannerYours"), "own" !== xp && null !== Ip && Yp("plotsGame:plotBannerOwner", {
              name: (0, kO.e)(Ip, Ap)
            }), !vp && wp]
          }), vp && (0, Jp.jsxs)("div", {
            className: "PlotsPlotBannerCoords SmallTextLight",
            children: [wp, "shared" === xp && (0, Jp.jsx)("span", {
              className: "PlotsPlotBannerBadge",
              children: Yp("plotsGame:plotBannerShared")
            })]
          })]
        })]
      })
    }
    const MO = function(pp, ip, cp, Op) {
      let {
        localPlayerId: op
      } = Op;
      const xp = new Ii;
      let Lp = null,
        Yp = null,
        Dp = null,
        Ap = null,
        Pp = null,
        Wp = null;
      const yp = [];
      return {
        onCreate: pp => {
          Lp = new yO(pp, op);
          const ip = new ii;
          Yp = new xO(pp, op, Lp, ip), Dp = new Pc(pp, op), Ap = new Qp(pp, Dp), Pp = new Rc(pp, op, Yp.nextCell), Wp = new YO(pp), yp.push((0, Sp.A)((0, Ip.createElement)(jc, {
            hud: xp,
            guide: Pp,
            tracker: ip,
            placement: Dp
          }, (0, Ip.createElement)(RO, {
            hud: xp
          }), (0, Ip.createElement)(Np, {
            journal: Ap
          }), (0, Ip.createElement)(tc, {
            placement: Dp
          }), (0, Ip.createElement)(tO, {
            placement: Dp
          })), {
            content: (0, Ip.createElement)(Zc, {
              journal: Ap,
              hud: xp,
              guide: Pp
            })
          }))
        },
        LP: () => {
          Wp.LP(), Yp.LP(), Dp.LP(), Ap.LP()
        },
        onPlayerAttemptAltAction: (pp, ip, cp, Op, op, Ip) => {
          if (null !== Ip) return void Yp.holdPressOnEntity();
          const Sp = void 0 === ip ? null : [ip, cp, Op];
          return Yp.attemptAltAction(Sp)
        },
        onPlayerClickUp: () => {
          Yp.endPress()
        },
        onAfterRender: (pp, ip) => {
          Dp.afterRender(ip), Yp.afterRender(ip), Pp.afterRender(ip)
        },
        onClose: () => {
          for (const pp of yp) pp();
          Lp.dispose(), Yp.dispose(), Dp.dispose(), Lp = null, Yp = null, Dp = null, Ap = null, Pp = null, Wp = null
        },
        onReceivedMessageFromServer: (pp, ip) => {
          if ("plotsPlot" === pp) xp.receivePlot(ip);
          else if ("plotsBlueprint" === pp) {
            const pp = ip;
            Yp.Ey(pp), Dp.Ey(pp)
          } else "plotsJournal" === pp ? Ap.Ey(ip) : "plotsJournalOpen" === pp ? Ap.openFromServer(ip) : "plotsPreviewEnd" === pp ? Dp.endFromServer() : "plotsGuide" === pp ? xp.receiveGuide(ip) : "plotsGuideDone" === pp && xp.receiveGuideDone()
        }
      }
    }
  },
  38719: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => xp
    });
    var Op = cp(38712);
    const op = 5,
      Ip = [0, 0, 0],
      Sp = {
        x: 0,
        y: 0,
        distSq: 0
      };

    function xp(pp, ip, cp, xp, Lp, Yp) {
      let [Dp, Ap, Pp] = xp;
      const Wp = (Dp + .5 - cp[0]) ** 2 + (Ap - cp[1]) ** 2 + (Pp + .5 - cp[2]) ** 2;
      let yp = null;
      Wp <= Yp ** 2 && (Ip[0] = Dp + .5, Ip[1] = Ap + Lp, Ip[2] = Pp + .5, yp = ip.projectWorldPosToViewport(Ip));
      const Up = null !== yp && yp.x > -op && yp.x < 100 + op && yp.y > -op && yp.y < 100 + op;
      return (0, Op.d)(pp, !Up), Up ? (Sp.x = yp.x, Sp.y = yp.y, Sp.distSq = Wp, Sp) : null
    }
  },
  39330: (pp, ip, cp) => {
    cp.d(ip, {
      e: () => Op,
      i: () => Ip
    });
    const Op = 1 / .6,
      op = {
        kind: "smokePuff"
      };
    class Ip {
      constructor(pp, ip, cp) {
        this.style = pp, this.TA = ip, this.half = cp, this.particles = null, this.lastFrame = -1
      }
      emit(pp, ip, cp) {
        let Ip = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : this.style.count;
        return cp !== this.lastFrame && (this.lastFrame = cp, this.particles || (this.particles = pp.createParticles(function(pp, ip) {
          const [
            [cp, Ip, Sp],
            [xp, Lp, Yp]
          ] = pp.colours;
          return {
            texture: pp.soft ? op : "square_particle",
            TA: ip,
            minLifeTime: pp.life[0] / Op,
            maxLifeTime: pp.life[1] / Op,
            minEmitPower: pp.power[0] * Op,
            maxEmitPower: pp.power[1] * Op,
            minSize: pp.size[0],
            maxSize: pp.size[1],
            emitRate: 0,
            gravity: [0, pp.lift * Op * Op, 0],
            dir1: [-pp.spread, 1, -pp.spread],
            dir2: [pp.spread, 1, pp.spread],
            colorGradients: [{
              timeFraction: 0,
              minColor: [cp, Ip, Sp, pp.alpha],
              maxColor: [xp, Lp, Yp, pp.alpha]
            }, {
              timeFraction: 1,
              minColor: [cp, Ip, Sp, 0],
              maxColor: [xp, Lp, Yp, 0]
            }],
            blendMode: pp.blendMode
          }
        }(this.style, this.TA), {
          pos: ip,
          half: this.half
        })), this.particles.moveTo(ip, this.half), this.particles.emit(Ip), !0)
      }
      dispose() {
        var pp;
        null === (pp = this.particles) || void 0 === pp || pp.stop(), this.particles = null
      }
    }
  },
  38712: (pp, ip, cp) => {
    cp.d(ip, {
      b: () => Sp,
      d: () => Ip
    });
    const Op = new WeakMap;

    function op(pp) {
      let ip = Op.get(pp);
      return ip || (ip = {
        hidden: pp.hidden,
        x: NaN,
        y: NaN
      }, Op.set(pp, ip)), ip
    }

    function Ip(pp, ip) {
      const cp = op(pp);
      cp.hidden !== ip && (cp.hidden = ip, pp.hidden = ip)
    }

    function Sp(pp, ip, cp) {
      const Op = op(pp);
      Op.x === ip && Op.y === cp || (Op.x = ip, Op.y = cp, pp.style.translate = `${ip}vw ${cp}vh`)
    }
  },
  37099: (pp, ip, cp) => {
    function Op(pp, ip) {
      return null === pp || null === ip ? pp === ip : pp[0] === ip[0] && pp[1] === ip[1] && pp[2] === ip[2]
    }

    function op(pp) {
      return [pp[0] + .5, pp[1] + .5, pp[2] + .5]
    }
    cp.d(ip, {
      e: () => op,
      i: () => Op
    })
  },
  37146: (pp, ip, cp) => {
    function Op(pp) {
      return pp.includes("Leaf Bed")
    }

    function op(pp) {
      return / Bed(?: Head)?(?:\||$)/.test(pp) && !Op(pp)
    }

    function Ip(pp) {
      return pp.includes(" Strongbed")
    }

    function Sp(pp) {
      return Op(pp) || op(pp) || Ip(pp)
    }
    cp.d(ip, {
      b: () => Sp,
      f: () => Op,
      g: () => Ip,
      h: () => op
    })
  },
  37142: (pp, ip, cp) => {
    cp.d(ip, {
      c: () => Yp
    });
    var Op = cp(37146),
      op = cp(9338);
    const Ip = [],
      Sp = [],
      xp = [],
      Lp = [];
    for (const Dp of Object.keys(op.h))(0, Op.f)(Dp) ? Ip.push(Dp) : (0, Op.h)(Dp) && Sp.push(Dp), (0, Op.g)(Dp) && xp.push(Dp), (Dp.includes(" Bed Head") || Dp.includes(" Strongbed Head")) && Lp.push(Dp);
    const Yp = {
      leafBeds: Ip,
      woolBeds: Sp,
      strongBeds: xp,
      beds: [...Ip, ...Sp, ...xp],
      bedHeads: Lp,
      blockRemoveActionRoots: ["Chest", "Loot Chest", "Iron Chest", "Mailbox", "Bookshelf", "Empty Bookshelf"]
    }
  },
  38756: pp => {
    pp.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAACXBIWXMAAAPoAAAD6AG1e1JrAAAAYUlEQVR4nGNgIBP8R8NYwX+GDVNRMQOm4v8MC9qxYwZUxf//b+T4//8A+///51khGMTeyIGp8Nz0gv8MDoFgGsbeUB2BXeHESHcUjFNhR4Dj/zp3OzAGsbEphHgIOyYNAACzzGY5JF2GbAAAAABJRU5ErkJggg=="
  }
};
Object.freeze(modules);
for (const pp in modules) Object.freeze(modules[pp]);