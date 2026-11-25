export const id = 119;
export const ids = [119, 120, 140];
export const modules = {
  5394: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => wQ.i,
      c: () => qQ,
      g: () => wQ.n
    });
    var wQ = XQ(5396);
    const qQ = [!1, !0].flatMap((QQ => ["terrain", "liquid", "model"].map((WQ => ({
      strict: QQ,
      program: WQ
    })))))
  },
  39494: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      ShaderPackPage: () => FQ,
      harnessShaderPackMode: () => rQ,
      setHarnessUrlShaderPack: () => JQ,
      shaderPackPage: () => gQ
    });
    var wQ = XQ(105),
      qQ = XQ(43),
      TQ = (XQ(3723), XQ(5394), XQ(3716)),
      zQ = XQ(7026);
    XQ(7002);
    const sQ = {
      status: "none"
    };
    class FQ {
      constructor() {
        this.stored = null, this.compiling = null, this.pagePack = null, this.resolved = null
      }
      preload() {
        if (null === this.stored) {
          if ((0, TQ.j)(wQ.featureFlags.settings.canUseShaderPacks)) return this.stored = Promise.resolve(null), PQ().then((QQ => {
            QQ && qQ.i.removeItem(TQ.c)
          })), this.stored;
          this.prefetchHint() && this.compiler().catch((() => {})), this.stored = this.readStored()
        }
        return this.stored
      }
      prefetchHint() {
        return (0, TQ.f)(wQ.featureFlags.settings.canUseShaderPacks)
      }
      async loadActive() {
        const QQ = await this.load();
        return "active" === QQ.status ? QQ.pack : null
      }
      load() {
        return this.pagePack ??= this.read().catch((QQ => (console.error("Failed to load the shader pack", QQ), sQ))).then((QQ => (this.resolved ??= QQ, QQ))), this.pagePack
      }
      hasNone() {
        var QQ;
        return "none" === (null === (QQ = this.resolved) || void 0 === QQ ? void 0 : QQ.status)
      }
      block(QQ) {
        this.resolved = {
          status: "blocked",
          messageKey: QQ,
          variants: null
        }, this.pagePack = Promise.resolve(this.resolved)
      }
      compiler() {
        return this.compiling ??= Promise.all([XQ.e(80), XQ.e(138), XQ.e(144)]).then((() => XQ(41988))).then((QQ => (QQ.prefetchCompiler(), QQ))), this.compiling
      }
      async readStored() {
        const QQ = await PQ();
        return QQ && this.compiler().then((QQ => QQ.reconcileHint())).catch((QQ => {
          console.error("Failed to correct the shader pack hint", QQ)
        })), QQ
      }
      async read() {
        const QQ = await this.preload();
        return QQ ? (await this.compiler()).compilePagePack(QQ) : sQ
      }
    }
    async function PQ() {
      if (!(0, TQ.n)(wQ.featureFlags.settings.canUseShaderPacks)) return null;
      try {
        const QQ = await (0, zQ.f)(!0);
        return QQ || qQ.i.setItem(TQ.c, !1), QQ
      } catch (QQ) {
        return console.error("Failed to read the stored shader pack", QQ), qQ.i.removeItem(TQ.c), null
      }
    }
    const gQ = new FQ;

    function JQ(QQ, WQ) {}

    function rQ() {
      return null
    }
  },
  7026: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      b: () => qQ,
      f: () => TQ
    });
    var wQ = XQ(43);
    const qQ = "shaderPack";
    async function TQ() {
      var QQ;
      let WQ = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
      return null !== (QQ = await wQ.f.getItem(qQ, WQ)) && void 0 !== QQ ? QQ : null
    }
  },
  7002: (QQ, WQ, XQ) => {
    XQ.r(WQ), XQ.d(WQ, {
      loadShaderPackTextures: () => zQ,
      shaderPackTextures: () => sQ
    });
    var wQ = XQ(5396);
    let qQ = null,
      TQ = null;

    function zQ() {
      return TQ ??= Promise.all([XQ.e(75), XQ.e(192)]).then((() => XQ(40738))).then((QQ => {
        let {
          FORMER_BLOCK_IMAGE_NAMES: WQ,
          textureNameToIndex: XQ,
          textureAnimationData: TQ
        } = QQ;
        return qQ ??= (0, wQ.l)(XQ, TQ, WQ), qQ
      })), TQ
    }

    function sQ() {
      if (null === qQ) throw new Error("Shader pack textures read before loadShaderPackTextures");
      return qQ
    }
  },
  5396: (QQ, WQ, XQ) => {
    XQ.d(WQ, {
      d: () => sQ,
      f: () => zQ,
      i: () => wQ,
      l: () => BQ,
      m: () => JQ,
      n: () => qQ,
      r: () => TQ,
      t: () => PQ,
      w: () => gQ,
      z: () => rQ
    });
    const wQ = 5;

    function qQ(QQ) {
      return QQ === wQ
    }

    function TQ(QQ) {
      return [...QQ.features]
    }
    const zQ = 262144,
      sQ = 256,
      FQ = 256;

    function PQ(QQ) {
      if ("object" !== typeof QQ || null === QQ || Array.isArray(QQ)) return "The pack has no files.";
      const WQ = [];
      for (const [XQ, wQ] of Object.entries(QQ)) {
        if ("string" !== typeof wQ) return `${XQ} isn't text.`;
        WQ.push({
          path: XQ,
          source: wQ
        })
      }
      return WQ.sort(((QQ, WQ) => JQ(QQ.path, WQ.path))),
        function(QQ) {
          if (0 === QQ.length) return "The pack has no .wgsl files.";
          if (QQ.length > sQ) return `The pack has more than ${sQ} .wgsl files.`;
          const WQ = new Set;
          for (const {
              path: XQ
            }
            of QQ) {
            const QQ = IQ(XQ);
            if (null !== QQ) return QQ;
            if (WQ.has(XQ)) return `The pack has two files at ${XQ}.`;
            WQ.add(XQ)
          }
          return rQ(QQ) > zQ ? `The pack's .wgsl files are over ${zQ/1024} KB in total.` : null
        }(WQ) ?? WQ
    }

    function gQ(QQ) {
      const WQ = {};
      for (const XQ of QQ) WQ[XQ.path] = XQ.source;
      return WQ
    }

    function JQ(QQ, WQ) {
      return QQ < WQ ? -1 : QQ > WQ ? 1 : 0
    }

    function rQ(QQ) {
      const WQ = new TextEncoder;
      let XQ = 0;
      for (const {
          source: wQ
        }
        of QQ) XQ += WQ.encode(wQ).byteLength;
      return XQ
    }

    function IQ(QQ) {
      if (!QQ.toLowerCase().endsWith(".wgsl")) return `${QQ} isn't a .wgsl file.`;
      if (QQ.length > FQ) return `A file path is over ${FQ} characters.`;
      if (QQ.includes("\\") || /[\u0000-\u001f]/.test(QQ)) return `${QQ} isn't a valid file path.`;
      return QQ.split("/").some((QQ => "" === QQ || "." === QQ || ".." === QQ)) ? `${QQ} isn't a valid file path.` : null
    }
    const jQ = /^(.*)\[rot\[([1-4])$/;

    function BQ(QQ, WQ) {
      let XQ = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : new Map;
      const wQ = new Map;
      WQ.forEach(((QQ, WQ) => {
        let {
          numAnimStates: XQ,
          animStartIdx: qQ
        } = QQ;
        for (let TQ = 1; TQ < XQ; TQ++) wQ.set(qQ + TQ - 1, WQ)
      }));
      const qQ = Object.entries(QQ),
        TQ = new Map;
      for (const [BQ, yQ] of qQ) {
        const QQ = jQ.exec(BQ);
        "1" === QQ?.[2] && TQ.set(QQ[1], yQ + 1)
      }
      const zQ = QQ => {
          const WQ = jQ.exec(QQ);
          return WQ && TQ.has(WQ[1]) ? {
            root: WQ[1],
            rotation: Number(WQ[2]) - 1
          } : null
        },
        sQ = new Set(qQ.map((QQ => {
          let [WQ] = QQ;
          return zQ(WQ)?.root ?? WQ
        }))),
        FQ = (QQ, XQ) => {
          const wQ = QQ.replace(/_?0$/, "");
          return (WQ[XQ]?.numAnimStates ?? 0) > 1 && !sQ.has(wQ) ? wQ : QQ
        },
        PQ = new Map;
      for (const [jQ, BQ] of qQ) PQ.set(BQ, FQ(zQ(jQ)?.root ?? jQ, BQ));
      const gQ = qQ.reduce(((QQ, WQ) => {
          let [, XQ] = WQ;
          return Math.max(QQ, XQ + 1)
        }), 0),
        JQ = Array.from({
          length: gQ
        }, ((QQ, WQ) => ({
          id: WQ + 1,
          rotation: 0
        }))),
        rQ = new Map,
        IQ = new Map;
      for (const [jQ, BQ] of qQ) {
        const QQ = zQ(jQ),
          WQ = wQ.get(BQ);
        if (void 0 !== WQ) {
          const XQ = PQ.get(WQ);
          IQ.set(jQ, {
            name: jQ,
            texture: XQ,
            kind: "frame"
          }), QQ && !IQ.has(QQ.root) && IQ.set(QQ.root, {
            name: QQ.root,
            texture: XQ,
            kind: "frame"
          });
          continue
        }
        const XQ = PQ.get(BQ),
          qQ = QQ?.root ?? jQ;
        if (XQ !== qQ && IQ.set(qQ, {
            name: qQ,
            texture: XQ,
            kind: "frame"
          }), QQ) {
          const WQ = TQ.get(QQ.root);
          JQ[BQ] = {
            id: WQ,
            rotation: QQ.rotation
          }, rQ.set(XQ, WQ), IQ.set(jQ, {
            name: jQ,
            texture: XQ,
            kind: "rotation"
          })
        } else rQ.set(XQ, BQ + 1)
      }
      for (const jQ of rQ.keys()) IQ.delete(jQ);
      for (const [jQ, BQ] of XQ) {
        const QQ = rQ.get(BQ);
        void 0 === QQ || rQ.has(jQ) || (rQ.set(jQ, QQ), IQ.delete(jQ))
      }
      return {
        named: [...rQ].sort(((QQ, WQ) => {
          let [XQ] = QQ, [wQ] = WQ;
          return XQ < wQ ? -1 : XQ > wQ ? 1 : 0
        })).map((QQ => {
          let [WQ, XQ] = QQ;
          return {
            name: WQ,
            id: XQ
          }
        })),
        aliases: [...IQ.values()],
        layers: JQ
      }
    }
  }
};
Object.freeze(modules);
for (const QQ in modules) Object.freeze(modules[QQ]);