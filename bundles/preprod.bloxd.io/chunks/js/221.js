export const id = 221;
export const ids = [221];
export const modules = {
  36929: (BB, OB, GB) => {
    GB.r(OB), GB.d(OB, {
      capturePreviewPicture: () => NB,
      holdPreviewsLow: () => oB.f,
      openLiveFigure: () => ZB,
      rasterNametag: () => VB
    });
    var YB = GB(1238),
      DB = GB(2787),
      QB = GB(34828),
      oB = GB(36937),
      jB = GB(36939),
      yB = GB(36945),
      JB = GB(36991),
      MB = GB(3898);
    const PB = 480,
      zB = 16,
      lB = {
        minGapMs: 250,
        now: () => performance.now(),
        skip: oB.s
      },
      pB = 30,
      qB = 1e4;

    function ZB(BB, OB, GB, yB) {
      const JB = QB.g.openCharacter(BB, "player");
      let MB = !1,
        PB = !1,
        pB = null;
      const ZB = async () => {
        const BB = JB.dev.canvas(),
          OB = await (YB = () => BB.isConnected && function(BB) {
            const {
              x: OB,
              width: GB
            } = RB(BB);
            if (0 === GB || 0 === BB.height) return !1;
            if (WB ??= document.createElement("canvas").getContext("2d", {
                willReadFrequently: !0
              }), null === WB) return !1;
            const YB = WB.canvas;
            YB.height = Math.min(BB.height, zB), YB.width = Math.max(1, Math.round(GB * YB.height / BB.height));
            const DB = WB;
            return DB.imageSmoothingQuality = "high", DB.drawImage(BB, OB, 0, GB, BB.height, 0, 0, YB.width, YB.height), AB(DB.getImageData(0, 0, YB.width, YB.height).data)
          }(BB), DB = oB.b, QB = () => !MB && JB.isReady(), jB = lB, new Promise((BB => {
            let OB = Number.NEGATIVE_INFINITY;
            const GB = () => {
              DB((() => {
                try {
                  if (!QB()) return void BB(!1);
                  if (jB.skip()) return void BB(!0);
                  const DB = jB.now();
                  if (DB - OB >= jB.minGapMs && (OB = DB, YB())) return void BB(!0);
                  GB()
                } catch (DB) {
                  console.warn("[loading-character] couldn't read a figure's frame", DB), BB(!1)
                }
              }))
            };
            GB()
          })));
        var YB, DB, QB, jB;
        return !OB || MB || PB || (PB = !0, GB(!0)), OB
      };
      return JB.ready.then((() => {
        if (MB) return !1;
        for (const oB of YB.t) {
          var BB;
          JB.setCosmetic(oB, null !== (BB = OB.cosmetics[oB]) && void 0 !== BB ? BB : (0, DB.d)(oB))
        }
        const GB = Promise.all(YB.t.map((BB => JB.untilDrawn(BB)))).then((() => !0)),
          QB = new Promise((BB => {
            setTimeout((() => {
              (0, oB.b)((() => {
                BB(!1)
              }))
            }), qB)
          }));
        return Promise.race([GB, QB])
      })).then((async BB => {
        if (!MB && JB.isReady() && await ZB() && BB) return NB(JB.dev.canvas(), (() => !MB && JB.isReady())).then((BB => {
          null === BB || MB || yB(BB)
        }))
      })).catch((BB => {
        console.warn("[loading-character] a figure couldn't draw", BB)
      })), {
        resize: (BB, OB) => {
          const YB = (0, jB.c)(BB, OB, window.devicePixelRatio),
            DB = null !== pB && (pB[0] !== YB[0] || pB[1] !== YB[1]);
          pB = YB, JB.resize(BB, OB), DB && PB && (PB = !1, GB(!1), ZB())
        },
        close: () => {
          MB = !0, JB.close()
        }
      }
    }

    function NB(BB, OB) {
      return new Promise((GB => {
        const YB = DB => {
          (0, oB.b)((() => {
            if (!OB()) return void GB(null);
            const QB = BB.isConnected ? function(BB) {
              let {
                canvas: OB,
                x: GB,
                width: YB
              } = BB;
              if (0 === YB || 0 === OB.height) return null;
              const DB = Math.min(1, PB / OB.height),
                QB = document.createElement("canvas");
              QB.width = Math.max(1, Math.round(YB * DB)), QB.height = Math.max(1, Math.round(OB.height * DB));
              const oB = QB.getContext("2d", {
                willReadFrequently: !0
              });
              if (!oB) return null;
              if (oB.drawImage(OB, GB, 0, YB, OB.height, 0, 0, QB.width, QB.height), !AB(oB.getImageData(0, 0, QB.width, QB.height).data)) return null;
              return QB.toDataURL("image/webp", .85)
            }(RB(BB)) : null;
            null !== QB || DB <= 1 || !BB.isConnected ? GB(QB) : YB(DB - 1)
          }))
        };
        YB(pB)
      }))
    }

    function RB(BB) {
      const OB = Math.min(BB.width, Math.round(BB.height * MB.e));
      return {
        canvas: BB,
        x: Math.round((BB.width - OB) / 2),
        width: OB
      }
    }
    let WB = null;

    function AB(BB) {
      for (let OB = 3; OB < BB.length; OB += 4)
        if (0 !== BB[OB]) return !0;
      return !1
    }
    async function VB(BB) {
      var OB;
      await JB.k.load();
      const GB = {
          name: BB.name,
          info: null,
          colour: null !== (OB = BB.nameColour) && void 0 !== OB ? OB : "default",
          ranks: BB.ranks,
          effects: [],
          health: null,
          IM: null,
          hideNameSeed: null,
          player: !BB.isYou
        },
        YB = document.createElement("canvas"),
        [DB, QB] = (0, yB.f)((0, yB.h)(yB.b.Nametag, GB), YB, !0);
      return 0 === DB || 0 === QB ? null : {
        src: YB.toDataURL("image/png"),
        width: DB,
        height: QB
      }
    }
  },
  34832: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => oB,
      h: () => DB,
      i: () => MB
    });
    var YB = GB(1611);

    function DB(BB) {
      var OB;
      return {
        ...oB.store,
        yaw: oB.store.yaw + (null !== (OB = YB.d[BB].previewYaw) && void 0 !== OB ? OB : 0)
      }
    }
    const QB = {
        yaw: .61 * Math.PI,
        pitch: Math.PI / 2.05,
        radius: 30,
        target: [0, 0, 0]
      },
      oB = {
        player: QB,
        store: {
          ...QB,
          radius: 33,
          target: [0, 3.9, 0]
        }
      };

    function jB(BB, OB) {
      BB instanceof Promise ? BB.then(OB).catch((BB => {
        console.error("Couldn't open the preview", BB)
      })) : OB(BB)
    }
    class yB {
      constructor(BB) {
        this.opened = null, this.view = null, this.size = null, this.closed = !1, jB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height), null !== this.view && BB.show(this.view))
        }))
      }
      show(BB) {
        var OB;
        this.view = BB, null === (OB = this.opened) || void 0 === OB || OB.show(BB)
      }
      resize(BB, OB) {
        var GB;
        this.size = {
          width: BB,
          height: OB
        }, null === (GB = this.opened) || void 0 === GB || GB.resize(BB, OB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    class JB {
      constructor(BB) {
        this.ready = void 0, this.opened = null, this.size = null, this.closed = !1, this.ready = Promise.resolve(BB).then((BB => BB.ready)), jB(BB, (BB => {
          this.closed ? BB.close() : (this.opened = BB, null !== this.size && BB.resize(this.size.width, this.size.height))
        }))
      }
      get dev() {
        return this.opened.dev
      }
      isReady() {
        var BB, OB;
        return null !== (BB = null === (OB = this.opened) || void 0 === OB ? void 0 : OB.isReady()) && void 0 !== BB && BB
      }
      setCosmetic(BB, OB) {
        var GB;
        null === (GB = this.opened) || void 0 === GB || GB.setCosmetic(BB, OB)
      }
      playEmote(BB) {
        var OB;
        null === (OB = this.opened) || void 0 === OB || OB.playEmote(BB)
      }
      setOrbit(BB) {
        var OB;
        null === (OB = this.opened) || void 0 === OB || OB.setOrbit(BB)
      }
      resetCamera() {
        var BB;
        null === (BB = this.opened) || void 0 === BB || BB.resetCamera()
      }
      async untilDrawn(BB) {
        var OB;
        await this.ready, await (null === (OB = this.opened) || void 0 === OB ? void 0 : OB.untilDrawn(BB))
      }
      resize(BB, OB) {
        var GB;
        this.size = {
          width: BB,
          height: OB
        }, null === (GB = this.opened) || void 0 === GB || GB.resize(BB, OB)
      }
      close() {
        var BB;
        this.closed = !0, null === (BB = this.opened) || void 0 === BB || BB.close(), this.opened = null
      }
    }
    const MB = new class {
      constructor() {
        this.host = null, this.makeDefault = null
      }
      setHost(BB) {
        this.host = BB
      }
      setDefaultHost(BB) {
        this.makeDefault = BB
      }
      current() {
        if (null === this.host) {
          if (null === this.makeDefault) throw new Error("no preview host");
          this.host = this.makeDefault()
        }
        return this.host
      }
      openMob(BB) {
        return new yB(this.current().openMob(BB))
      }
      openPet(BB) {
        return new yB(this.current().openPet(BB))
      }
      openMobLineup(BB) {
        return new yB(this.current().openMobLineup(BB))
      }
      openCharacter(BB, OB) {
        return new JB(this.current().openCharacter(BB, OB))
      }
    }
  },
  34828: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => YB.d,
      e: () => YB.h,
      g: () => YB.i
    });
    var YB = GB(34832);
    class DB {
      constructor(BB) {
        this.load = BB, this.loaded = null, this.loading = null
      }
      run(BB) {
        return null !== this.loaded ? BB(this.loaded) : (this.loading ??= this.load().then((BB => (this.loaded = BB, BB)), (BB => {
          throw this.loading = null, BB
        })), this.loading.then(BB))
      }
    }
    class QB {
      constructor() {
        this.mobScene = new DB((() => Promise.all([GB.e(84), GB.e(259), GB.e(258), GB.e(283), GB.e(111), GB.e(284), GB.e(87), GB.e(281), GB.e(85), GB.e(86), GB.e(291), GB.e(285), GB.e(290), GB.e(288), GB.e(280), GB.e(303), GB.e(255), GB.e(272), GB.e(286), GB.e(289), GB.e(89), GB.e(249), GB.e(204), GB.e(109), GB.e(261), GB.e(252), GB.e(268), GB.e(219), GB.e(269), GB.e(88), GB.e(273)]).then((() => GB(42079))))), this.characterScene = new DB((() => Promise.all([GB.e(84), GB.e(259), GB.e(258), GB.e(283), GB.e(111), GB.e(284), GB.e(87), GB.e(281), GB.e(85), GB.e(86), GB.e(291), GB.e(285), GB.e(290), GB.e(288), GB.e(280), GB.e(303), GB.e(255), GB.e(272), GB.e(286), GB.e(289), GB.e(89), GB.e(249), GB.e(204), GB.e(109), GB.e(261), GB.e(252), GB.e(268), GB.e(219), GB.e(269), GB.e(88), GB.e(218)]).then((() => GB(42186)))))
      }
      openMob(BB) {
        return this.mobScene.run((OB => OB.openMobPreview(BB)))
      }
      openPet(BB) {
        return this.mobScene.run((OB => OB.openPetPreview(BB)))
      }
      openMobLineup(BB) {
        return this.mobScene.run((OB => OB.openMobLineupPreview(BB)))
      }
      openCharacter(BB, OB) {
        return this.characterScene.run((GB => GB.openCharacterPreview(BB, OB)))
      }
    }
    YB.i.setDefaultHost((() => new QB))
  },
  36948: (BB, OB, GB) => {
    function YB(BB, OB, GB) {
      if ("undefined" !== typeof OffscreenCanvas) return new OffscreenCanvas(BB, OB).getContext("2d", GB);
      const YB = document.createElement("canvas");
      return YB.width = BB, YB.height = OB, YB.getContext("2d", GB)
    }

    function DB(BB, OB) {
      return BB.getContext("2d", OB)
    }
    GB.d(OB, {
      e: () => DB,
      f: () => YB
    })
  },
  36939: (BB, OB, GB) => {
    GB.d(OB, {
      c: () => QB
    });
    const YB = 4e5,
      DB = 2;

    function QB(BB, OB, GB) {
      let [QB, oB] = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : [BB, OB], jB = Math.min(Number.isFinite(GB) && GB > 0 ? GB : 1, DB);
      const yB = Math.max(0, QB, BB) * Math.max(0, oB, OB) * jB * jB;
      return yB > YB && (jB *= Math.sqrt(YB / yB)), [Math.max(1, Math.floor(Math.max(0, BB) * jB)), Math.max(1, Math.floor(Math.max(0, OB) * jB))]
    }
  },
  36997: (BB, OB, GB) => {
    GB.d(OB, {
      d: () => MB,
      g: () => yB,
      k: () => jB,
      o: () => JB
    });
    var YB = GB(2034);
    let DB = null,
      QB = 0;
    const oB = new Set;

    function jB() {
      return DB
    }

    function yB() {
      return QB
    }

    function JB(BB) {
      DB = BB, QB++, (0, YB.b)();
      for (const OB of oB) OB()
    }

    function MB(BB) {
      oB.add(BB)
    }
  },
  36937: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => qB,
      f: () => MB,
      h: () => lB,
      j: () => PB,
      m: () => ZB,
      p: () => pB,
      s: () => zB
    });
    const YB = 30,
      DB = 4;
    let QB = 0,
      oB = !1,
      jB = !1,
      yB = Number.NEGATIVE_INFINITY,
      JB = [];

    function MB() {
      0 === QB && (oB = !1, jB = !1), QB++;
      let BB = !1;
      return () => {
        BB || (BB = !0, QB--)
      }
    }

    function PB(BB) {
      BB && (jB = !0)
    }

    function zB() {
      return jB
    }

    function lB(BB) {
      oB = BB
    }

    function pB(BB) {
      return !(QB > 0 && (oB || BB - yB < 1e3 / YB - DB)) && (yB = BB, !0)
    }

    function qB(BB) {
      JB.push(BB)
    }

    function ZB() {
      if (0 === JB.length) return;
      const BB = JB;
      JB = [];
      for (const GB of BB) try {
        GB()
      } catch (OB) {
        console.warn("[bloxd-previews] an after-draw callback threw", OB)
      }
    }
  },
  37009: (BB, OB, GB) => {
    function YB() {
      return GB(37013)
    }

    function DB() {
      return GB(37018)
    }

    function QB(BB) {
      return ["pl", "ru", "tr", "uk", "vi"].includes(BB)
    }
    GB.d(OB, {
      b: () => QB,
      c: () => YB,
      e: () => DB
    })
  },
  36945: (BB, OB, GB) => {
    GB.d(OB, {
      b: () => ZB,
      f: () => EB,
      h: () => uB,
      i: () => FB
    });
    var YB = GB(36977),
      DB = GB(36948),
      QB = GB(36954),
      oB = GB(36961);

    function jB(BB, OB, GB) {
      const YB = "object" === typeof BB && null !== BB ? BB : {},
        DB = function(BB, OB, GB) {
          if (!Array.isArray(BB) || 0 === BB.length) return [];
          const YB = [{
            width: 0,
            height: 0,
            y: 0,
            items: []
          }];
          for (const jB of (0, oB.h)(BB, oB.d.DEFAULT_FONT_SIZE, GB)) {
            if ("text" !== jB.kind) {
              YB[YB.length - 1].items.push({
                content: jB,
                chars: 1,
                size: {
                  x: 0,
                  width: 0
                }
              });
              continue
            }
            if (0 === jB.text.length) continue;
            const BB = YB[YB.length - 1].items.reduce(((BB, OB) => BB + ("text" === OB.content.kind ? (0, QB.c)(OB.content.text) : OB.chars)), 0);
            (0, QB.d)(jB.text, BB).forEach(((BB, OB) => {
              OB > 0 && YB.push({
                width: 0,
                height: 0,
                y: 0,
                items: []
              }), BB.length > 0 && YB[YB.length - 1].items.push({
                content: {
                  ...jB,
                  text: BB
                },
                chars: BB.length,
                size: {
                  x: 0,
                  width: 0
                }
              })
            }))
          }
          let DB = oB.d.VERTICAL_PADDING / 2;
          for (const QB of YB) {
            if (0 === QB.items.length) continue;
            const {
              width: BB,
              height: YB,
              sizes: jB
            } = (0, oB.f)(QB.items.map((BB => BB.content)), OB, GB);
            QB.items.forEach(((BB, OB) => {
              BB.size = jB[OB]
            })), QB.width = BB, QB.height = YB, QB.y = DB, DB += YB + oB.d.LINE_SPACING
          }
          return YB
        }(YB.content, OB, GB);
      let jB = 0,
        yB = oB.d.VERTICAL_PADDING,
        JB = 0;
      for (const QB of DB) {
        jB = Math.max(jB, QB.width + 2 * oB.d.HORIZONTAL_PADDING), yB += QB.height + oB.d.LINE_SPACING;
        for (const BB of QB.items) JB += BB.chars
      }
      const MB = "string" === typeof YB.backgroundColor ? YB.backgroundColor : "#22283b";
      return {
        width: jB,
        height: yB,
        chars: JB,
        draw: (BB, OB) => {
          const YB = [];
          if (BB.fillStyle = MB, BB.fillRect(0, 0, jB, yB), null === OB)
            for (const QB of DB) QB.items.length > 0 && (0, oB.p)(QB.items.map((BB => BB.content)), 0, QB.y, QB.height, BB, GB, YB);
          else {
            let QB = 0;
            for (const jB of DB)
              for (const DB of jB.items) {
                if (QB >= OB) break;
                const yB = "text" === DB.content.kind ? {
                  ...DB.content,
                  text: DB.content.text.substring(0, OB - QB)
                } : DB.content;
                (0, oB.m)(yB, DB.size.x, jB.y, jB.height, BB, GB, YB, DB.size.width), QB += DB.chars
              }
          }(0, oB.l)(YB, BB)
        }
      }
    }
    var yB = GB(36963),
      JB = GB(36972);
    const MB = 256,
      PB = 1024,
      zB = {
        width: 1,
        height: 7 / 8
      };
    var lB = GB(36985);
    const pB = {
      leaderboard: ""
    };
    var qB = GB(36991);
    const ZB = {
        Nametag: 1,
        MultilineText: 2,
        Board: 3,
        Leaderboard: 4
      },
      NB = 2048,
      RB = 256,
      WB = 10,
      AB = 4,
      VB = 65536,
      SB = new TextDecoder;
    let nB = qB.s,
      UB = -1;
    const fB = new Map,
      kB = new Map;
    let dB = 0;
    const KB = new TextEncoder;

    function uB(BB, OB) {
      const GB = KB.encode(JSON.stringify(OB)),
        YB = new Uint8Array(GB.length + 1);
      return YB[0] = BB, YB.set(GB, 1), YB
    }
    const mB = {
        name: "Ag",
        info: null,
        colour: "default",
        ranks: [],
        effects: [],
        health: .5,
        IM: null,
        hideNameSeed: null
      },
      IB = [uB(ZB.Nametag, mB), uB(ZB.Nametag, {
        ...mB,
        info: {
          content: [{
            str: "Ag"
          }],
          subtitle: ["Ag"]
        }
      }), uB(ZB.MultilineText, {
        box: {
          content: ["Ag"]
        },
        shown: null
      }), ...YB.b.map(((BB, OB) => uB(ZB.Board, {
        shared: {
          text: "Ag",
          textSize: OB
        },
        w: 0,
        h: 0
      })))];

    function FB(BB) {
      qB.k.load().then((() => {
        if (BB()) return;
        const OB = (0, DB.f)(1, 1, {
          willReadFrequently: !0
        });
        var GB;
        OB && (GB = OB.canvas, IB.map((BB => EB(BB, GB))))
      }))
    }
    let iB = qB.y;

    function LB() {
      fB.clear(), kB.clear()
    }

    function gB(BB, OB) {
      const GB = BB.get(OB);
      return void 0 !== GB && (BB.delete(OB), BB.set(OB, GB)), GB
    }

    function rB(BB, OB, GB) {
      BB.set(OB, GB), BB.size > RB && BB.delete(BB.keys().next().value)
    }

    function XB(BB, OB, GB) {
      if (BB === ZB.Nametag) {
        let BB = gB(fB, OB);
        return void 0 === BB && (BB = (0, yB.d)(JSON.parse(OB), GB, nB), rB(fB, OB, BB)), BB
      }
      if (BB === ZB.MultilineText) {
        var DB;
        const BB = JSON.parse(OB),
          YB = JSON.stringify(null !== (DB = BB.box) && void 0 !== DB ? DB : null),
          QB = "number" === typeof BB.shown ? BB.shown : null;
        let oB = gB(kB, YB);
        void 0 === oB && (oB = jB(BB.box, GB, nB), rB(kB, YB, oB));
        const yB = null === QB ? null : Math.min(Math.max(0, Math.floor(QB)), oB.chars),
          JB = oB;
        return {
          width: JB.width,
          height: JB.height,
          draw: BB => {
            JB.draw(BB, yB)
          }
        }
      }
      if (BB === ZB.Board) return function(BB, OB) {
        var GB;
        if (!OB.canSeePlayerWrittenText) return null;
        const {
          shared: DB,
          w: QB = 0,
          h: oB = 0
        } = BB, jB = !QB;
        let yB;
        if (jB) {
          var lB, pB;
          yB = null !== (lB = null === DB || void 0 === DB || null === (pB = DB.text) || void 0 === pB ? void 0 : pB.toString()) && void 0 !== lB ? lB : ""
        } else {
          if ("string" !== typeof(null === DB || void 0 === DB ? void 0 : DB.text)) return null;
          yB = DB.text
        }
        if ("" === yB.trim()) return null;
        const qB = null !== (GB = null === DB || void 0 === DB ? void 0 : DB.textSize) && void 0 !== GB ? GB : 0,
          ZB = YB.b[qB].ingameFontSize;
        let NB = zB,
          RB = MB;
        jB || (yB = (0, YB.m)(yB, qB, QB, oB), NB = (0, YB.t)(QB, oB), RB = Math.min(MB, PB / Math.max(NB.width, NB.height)));
        const WB = Math.round(RB * NB.width),
          AB = Math.round(RB * NB.height),
          VB = RB / MB;
        return {
          width: WB,
          height: AB,
          draw: BB => {
            JB.c.fontSize = ZB * VB, JB.c.fontWeight = "bold", JB.c.font = "'Jetbrains Mono', monospace", JB.c.drawText(BB, yB, 0, (-10 - 7 * qB) * VB, WB, AB)
          }
        }
      }(JSON.parse(OB), nB);
      if (BB === ZB.Leaderboard) return function(BB, OB, GB) {
        var YB;
        const DB = (0, lB.i)(BB.opts, pB),
          QB = (0, lB.f)(DB, GB),
          oB = {
            top: (0, lB.h)(DB, (0, lB.l)(BB.top)),
            around: null !== (YB = BB.around) && void 0 !== YB ? YB : null,
            showPlayerText: OB.canSeePlayerWrittenText,
            localPlayerDbId: OB.localPlayerDbId
          };
        return {
          width: QB.pixelWidth,
          height: QB.pixelHeight,
          draw: BB => {
            const {
              a: OB,
              d: GB
            } = BB.getTransform();
            (0, lB.d)(BB, Math.round(QB.pixelWidth * OB), Math.round(QB.pixelHeight * GB), QB, DB, oB)
          }
        }
      }(JSON.parse(OB), nB, NB);
      throw new Error(`unknown text plane kind ${BB}`)
    }
    const wB = 2 ** Math.floor(Math.log2(NB));

    function EB(BB, OB) {
      let GB = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        YB = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
      try {
        if (BB.length < 2) return [0, 0];
        const QB = (0, DB.e)(OB);
        if (!QB) return [0, 0];
        const oB = iB();
        oB !== UB && (UB = oB, LB());
        const [jB] = BB, yB = SB.decode(BB.subarray(1));
        let JB;
        jB !== ZB.Board && jB !== ZB.Leaderboard || !nB.canSeePlayerWrittenText || nB.glyphsShown(yB), QB.save();
        try {
          JB = XB(jB, yB, QB)
        } finally {
          QB.restore()
        }
        if (null === JB || !(JB.width > 0 && JB.height > 0)) return [0, 0];
        const MB = Math.min(1, NB / JB.width, NB / JB.height),
          PB = BB => YB ? function(BB) {
            const OB = 2 ** Math.ceil(Math.log2(BB));
            return Math.min(wB, OB - BB > BB - OB / 2 ? OB / 2 : OB)
          }(BB) : Math.min(NB, Math.ceil(BB * MB)),
          [zB, lB] = [PB(JB.width), PB(JB.height)];
        ! function(BB, OB, GB, YB, DB) {
          const QB = Math.max(BB.width, GB),
            oB = Math.max(BB.height, YB),
            jB = DB || QB * oB > Math.max(AB * GB * YB, VB),
            [yB, JB] = jB ? [GB, YB] : [QB, oB];
          yB === BB.width && JB === BB.height ? OB.clearRect(0, 0, yB, JB) : (BB.width = yB, BB.height = JB)
        }(OB, QB, zB, lB, GB), QB.save();
        try {
          const [BB, OB] = YB ? [zB / JB.width, lB / JB.height] : [MB, MB];
          1 === BB && 1 === OB || QB.scale(BB, OB), JB.draw(QB)
        } finally {
          QB.restore()
        }
        return [zB, lB]
      } catch (QB) {
        ! function(BB, OB) {
          dB < WB && (dB++, console.warn(`[bloxd-wasm-client] ${BB}`, OB))
        }("could not raster a text plane", QB);
        try {
          OB.width = 1
        } catch {}
        return [0, 0]
      }
    }
  },
  37013: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/JetBrainsMonoNL-ExtraBold-latin.68689f5c710b4650e4b8.woff2"
  },
  37018: (BB, OB, GB) => {
    BB.exports = GB.p + "static/media/JetBrainsMonoNL-ExtraBold-rest.d152b95e9e75f7dca56d.woff2"
  }
};
Object.freeze(modules);
for (const BB in modules) Object.freeze(modules[BB]);